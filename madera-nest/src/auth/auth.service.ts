import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';

import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { EnvService } from '../env/env.service';
import { User } from '@entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
        private readonly envService: EnvService,
    ) {
    }

    static logged(request): { status: number, user: User } {
        return { status: 200, user: request.user };
    }

    static hash(password: string, salt: string = AuthService.randomSalt(24), algorithm: string = 'sha512'): { password: string, salt: string } {
        const hash = crypto.createHmac(algorithm, salt);
        hash.update(password);
        const hashedPassword = hash.digest('hex');
        return {
            password: hashedPassword,
            salt,
        };
    }

    static compare(password: string, salt: string, passwordHashed: string): boolean {
        return AuthService.hash(password, salt).password === passwordHashed;
    }

    private static randomSalt(length: number): string {
        return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
    }

    async validateUser(payload: JwtPayload): Promise<{ details: User, payload: JwtPayload }> {
        return {
            details: await this.userRepository.findOne({
                where: {
                    id: payload.id,
                    email: payload.email,
                },
            }),
            payload,
        };
    }

    async login(
        data: {
            email: string,
            password: string,
        },
        ip: string,
    ): Promise<{
        response: {
            status: number,
            message?: string,
            payload?: JwtPayload,
            user?: User,
        },
        jwt?: string,
    }> {
        const user = await this.userRepository.findOne({
            where: {
                email: data.email,
            },
        });
        if (user) {
            if (AuthService.compare(data.password, user.salt, user.password)) {
                const payload: JwtPayload = {
                    email: user.email,
                    id: user.id,
                };

                const jwtToken = this.jwtService.sign(payload, {
                    algorithm: 'HS512',
                    audience: 'localhost',
                    issuer: 'localhost',
                    subject: user.email,
                });

                return {
                    response: {
                        status: 200,
                        message: 'Accès autorisé.',
                        payload,
                        user,
                    },
                    jwt: jwtToken,
                };
            }
            return { response: { status: 401, message: 'Accès refusé.' } };
        }
        return { response: { status: 401, message: 'Accès refusé.' } }; // User not found
    }

    verifyToken(jwt: string) {
        return this.jwtService.verify(jwt);
    }
}

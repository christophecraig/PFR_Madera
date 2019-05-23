import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { EnvService } from '../env/env.service';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
        private readonly envService: EnvService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req: Request) => {
                    return req && req.signedCookies && req.signedCookies.jwt;
                },
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            secretOrKey: 'secret',
            algorithms: ['HS512'],
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}

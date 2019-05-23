import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@entities/user.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne(id);
    }

    async upsertOne(data: User): Promise<User> {
        let user = new User();
        user = this.userRepository.merge(user, data);
        return this.userRepository.save(user);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.userRepository.delete(id);
    }
}

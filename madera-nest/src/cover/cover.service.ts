import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cover } from '@entities/cover.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class CoverService {
    constructor(
        @InjectRepository(Cover)
        private readonly coverRepository: Repository<Cover>,
    ) { }

    async findAll(): Promise<Cover[]> {
        return this.coverRepository.find();
    }

    async findOne(id: number): Promise<Cover> {
        return this.coverRepository.findOne(id);
    }

    async upsertOne(data: Cover): Promise<Cover> {
        let cover = new Cover();
        cover = this.coverRepository.merge(cover, data);
        return this.coverRepository.save(cover);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.coverRepository.delete(id);
    }
}

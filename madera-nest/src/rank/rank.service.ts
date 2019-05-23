import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rank } from '@entities/rank.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class RankService {
    constructor(
        @InjectRepository(Rank)
        private readonly rankRepository: Repository<Rank>,
    ) { }

    async findAll(): Promise<Rank[]> {
        return this.rankRepository.find();
    }

    async findOne(id: number): Promise<Rank> {
        return this.rankRepository.findOne(id);
    }

    async upsertOne(data: Rank): Promise<Rank> {
        let rank = new Rank();
        rank = this.rankRepository.merge(rank, data);
        return this.rankRepository.save(rank);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.rankRepository.delete(id);
    }
}

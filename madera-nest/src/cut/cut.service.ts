import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cut } from '@entities/cut.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class CutService {
    constructor(
        @InjectRepository(Cut)
        private readonly cutRepository: Repository<Cut>,
    ) { }

    async findAll(): Promise<Cut[]> {
        return this.cutRepository.find();
    }

    async findOne(id: number): Promise<Cut> {
        return this.cutRepository.findOne(id);
    }

    async upsertOne(data: Cut): Promise<Cut> {
        let cut = new Cut();
        cut = this.cutRepository.merge(cut, data);
        return this.cutRepository.save(cut);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.cutRepository.delete(id);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Range } from '@entities/range.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class RangeService {
    constructor(
        @InjectRepository(Range)
        private readonly rangeRepository: Repository<Range>,
    ) { }

    async findAll(): Promise<Range[]> {
        return this.rangeRepository.find({
            relations: ['models', 'modules'],
        });
    }

    async findOne(id: number): Promise<Range> {
        return this.rangeRepository.findOne(id, {
            relations: ['models', 'modules'],
        });
    }

    async upsertOne(data: Range): Promise<Range> {
        let range = new Range();
        range = this.rangeRepository.merge(range, data);
        return this.rangeRepository.save(range);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.rangeRepository.delete(id);
    }
}

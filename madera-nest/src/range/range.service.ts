import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Range } from '@entities/range.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RangeService {
    constructor(
        @InjectRepository(Range)
        private readonly rangeRepository: Repository<Range>,
    ) { }

    async findAll(): Promise<Range[]> {
        return this.rangeRepository.find();
    }

    async findOne(id: number): Promise<Range> {
        return this.rangeRepository.findOne(id);
    }

    async upsertOne(data: Range): Promise<Range> {
        let range = new Range();
        range = this.rangeRepository.merge(range, data);
        return this.rangeRepository.save(range);
    }
}

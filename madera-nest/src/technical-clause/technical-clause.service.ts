import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnicalClause } from 'src/entities/technical-clause.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TechnicalClauseService {
    constructor(
        @InjectRepository(TechnicalClause)
        private readonly technicalClauseRepository: Repository<TechnicalClause>,
    ) { }

    async findAll(): Promise<TechnicalClause[]> {
        return this.technicalClauseRepository.find();
    }

    async findOne(id: number): Promise<TechnicalClause> {
        return this.technicalClauseRepository.findOne(id);
    }

    async upsertOne(data: TechnicalClause): Promise<TechnicalClause> {
        let technicalClause = new TechnicalClause();
        technicalClause = this.technicalClauseRepository.merge(technicalClause, data);
        return this.technicalClauseRepository.save(technicalClause);
    }
}

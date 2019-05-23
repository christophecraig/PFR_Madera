import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unit } from '@entities/unit.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class UnitService {
    constructor(
        @InjectRepository(Unit)
        private readonly unitRepository: Repository<Unit>,
    ) { }

    async findAll(): Promise<Unit[]> {
        return this.unitRepository.find();
    }

    async findOne(id: number): Promise<Unit> {
        return this.unitRepository.findOne(id);
    }

    async upsertOne(data: Unit): Promise<Unit> {
        let unit = new Unit();
        unit = this.unitRepository.merge(unit, data);
        return this.unitRepository.save(unit);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.unitRepository.delete(id);
    }
}

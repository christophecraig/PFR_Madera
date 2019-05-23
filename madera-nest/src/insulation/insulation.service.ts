import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Insulation } from '@entities/insulation.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class InsulationService {
    constructor(
        @InjectRepository(Insulation)
        private readonly insulationRepository: Repository<Insulation>,
    ) { }

    async findAll(): Promise<Insulation[]> {
        return this.insulationRepository.find();
    }

    async findOne(id: number): Promise<Insulation> {
        return this.insulationRepository.findOne(id);
    }

    async upsertOne(data: Insulation): Promise<Insulation> {
        let insulation = new Insulation();
        insulation = this.insulationRepository.merge(insulation, data);
        return this.insulationRepository.save(insulation);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.insulationRepository.delete(id);
    }
}

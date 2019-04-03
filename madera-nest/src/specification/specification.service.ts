import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specification } from 'src/entities/specification.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpecificationService {
    constructor(
        @InjectRepository(Specification)
        private readonly specificationRepository: Repository<Specification>,
    ) { }

    async findAll(): Promise<Specification[]> {
        return this.specificationRepository.find();
    }

    async findOne(id: number): Promise<Specification> {
        return this.specificationRepository.findOne(id);
    }

    async upsertOne(data: Specification): Promise<Specification> {
        let specification = new Specification();
        specification = this.specificationRepository.merge(specification, data);
        return this.specificationRepository.save(specification);
    }
}
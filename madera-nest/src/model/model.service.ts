import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from '@entities/model.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModelService {
    constructor(
        @InjectRepository(Model)
        private readonly modelRepository: Repository<Model>,
    ) { }

    async findAll(): Promise<Model[]> {
        return this.modelRepository.find({
            relations: ['range'],
        });
    }

    async findOne(id: number): Promise<Model> {
        return this.modelRepository.findOne(id, {
            relations: ['range'],
        });
    }

    async upsertOne(data: Model): Promise<Model> {
        let model = new Model();
        model = this.modelRepository.merge(model, data);
        return this.modelRepository.save(model);
    }
}

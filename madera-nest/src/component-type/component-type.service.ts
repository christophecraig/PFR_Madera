import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComponentType } from '@entities/component-type.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class ComponentTypeService {
    constructor(
        @InjectRepository(ComponentType)
        private readonly componentTypeRepository: Repository<ComponentType>,
    ) { }

    async findAll(): Promise<ComponentType[]> {
        return this.componentTypeRepository.find();
    }

    async findOne(id: number): Promise<ComponentType> {
        return this.componentTypeRepository.findOne(id);
    }

    async upsertOne(data: ComponentType): Promise<ComponentType> {
        let componentType = new ComponentType();
        componentType = this.componentTypeRepository.merge(componentType, data);
        return this.componentTypeRepository.save(componentType);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.componentTypeRepository.delete(id);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Component } from '@entities/component.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class ComponentService {
    constructor(
        @InjectRepository(Component)
        private readonly componentRepository: Repository<Component>,
    ) { }

    async findAll(): Promise<Component[]> {
        return this.componentRepository.find();
    }

    async findOne(id: number): Promise<Component> {
        return this.componentRepository.findOne(id);
    }

    async upsertOne(data: Component): Promise<Component> {
        let component = new Component();
        component = this.componentRepository.merge(component, data);
        if (data.technicalClauses) {
            // if (data.technicalClauses.length > 0) {
                component.technicalClauses = data.technicalClauses;
            // } else {
            //     component.technicalClauses = [];
            // }
        }
        return this.componentRepository.save(component);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.componentRepository.delete(id);
    }
}

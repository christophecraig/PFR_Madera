import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Component } from '@entities/component.entity';
import { Repository } from 'typeorm';

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
        return this.componentRepository.save(component);
    }
}

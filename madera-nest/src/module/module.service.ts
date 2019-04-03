import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Module } from 'src/entities/module.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModuleService {
    constructor(
        @InjectRepository(Module)
        private readonly moduleRepository: Repository<Module>,
    ) { }

    async findAll(): Promise<Module[]> {
        return this.moduleRepository.find();
    }

    async findOne(id: number): Promise<Module> {
        return this.moduleRepository.findOne(id);
    }

    async upsertOne(data: Module): Promise<Module> {
        let module = new Module();
        module = this.moduleRepository.merge(module, data);
        return this.moduleRepository.save(module);
    }
}
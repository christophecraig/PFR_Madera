import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ModuleService } from './module.service';
import { Module } from 'src/entities/module.entity';

@Controller('module')
export class ModuleController {
    constructor(private readonly moduleService: ModuleService) {

    }

    @Get()
    findAll(): Promise<Module[]> {
        return this.moduleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Module> {
        return this.moduleService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Module): Promise<Module> {
        return this.moduleService.upsertOne(data);
    }
}

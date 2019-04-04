import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ComponentTypeService } from './component-type.service';
import { ComponentType } from '@entities/component-type.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('component-type')
@Controller('component-type')
export class ComponentTypeController {
    constructor(private readonly componentTypeService: ComponentTypeService) {

    }

    @Get()
    findAll(): Promise<ComponentType[]> {
        return this.componentTypeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<ComponentType> {
        return this.componentTypeService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: ComponentType): Promise<ComponentType> {
        return this.componentTypeService.upsertOne(data);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<DeleteResult> {
        return this.componentTypeService.deleteOne(id);
    }
}

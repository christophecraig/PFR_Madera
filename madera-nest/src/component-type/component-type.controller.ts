import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ComponentTypeService } from './component-type.service';
import { ComponentType } from 'src/entities/component-type.entity';

@Controller('component')
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
}

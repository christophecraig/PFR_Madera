import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ComponentService } from './component.service';
import { Component } from 'src/entities/component.entity';

@Controller('component')
export class ComponentController {
    constructor(private readonly componentService: ComponentService) {

    }

    @Get()
    findAll(): Promise<Component[]> {
        return this.componentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Component> {
        return this.componentService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Component): Promise<Component> {
        return this.componentService.upsertOne(data);
    }
}

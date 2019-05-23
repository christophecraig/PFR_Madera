import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ComponentService } from './component.service';
import { Component } from '@entities/component.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('component')
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

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.componentService.deleteOne(id);
    }
}

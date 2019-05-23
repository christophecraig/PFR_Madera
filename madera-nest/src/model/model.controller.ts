import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ModelService } from './model.service';
import { Model } from '@entities/model.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('model')
@Controller('model')
export class ModelController {
    constructor(private readonly modelService: ModelService) {

    }

    @Get()
    findAll(): Promise<Model[]> {
        return this.modelService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Model> {
        return this.modelService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Model): Promise<Model> {
        return this.modelService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.modelService.deleteOne(id);
    }
}

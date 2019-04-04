import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ModelService } from './model.service';
import { Model } from '@entities/model.entity';
import { ApiUseTags } from '@nestjs/swagger';

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
}

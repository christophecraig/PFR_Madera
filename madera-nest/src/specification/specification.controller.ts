import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { SpecificationService } from './specification.service';
import { Specification } from '@entities/specification.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('specification')
@Controller('specification')
export class SpecificationController {
    constructor(private readonly specificationService: SpecificationService) {

    }

    @Get()
    findAll(): Promise<Specification[]> {
        return this.specificationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Specification> {
        return this.specificationService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Specification): Promise<Specification> {
        return this.specificationService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.specificationService.deleteOne(id);
    }
}

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SpecificationService } from './specification.service';
import { Specification } from 'src/entities/specification.entity';

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
}

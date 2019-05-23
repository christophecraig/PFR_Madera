import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { InsulationService } from './insulation.service';
import { Insulation } from '@entities/insulation.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('insulation')
@Controller('insulation')
export class InsulationController {
    constructor(private readonly insulationService: InsulationService) {

    }

    @Get()
    findAll(): Promise<Insulation[]> {
        return this.insulationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Insulation> {
        return this.insulationService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Insulation): Promise<Insulation> {
        return this.insulationService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.insulationService.deleteOne(id);
    }
}

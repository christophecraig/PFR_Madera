import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { UnitService } from './unit.service';
import { Unit } from '@entities/unit.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('unit')
@Controller('unit')
export class UnitController {
    constructor(private readonly unitService: UnitService) {

    }

    @Get()
    findAll(): Promise<Unit[]> {
        return this.unitService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Unit> {
        return this.unitService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Unit): Promise<Unit> {
        return this.unitService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.unitService.deleteOne(id);
    }
}

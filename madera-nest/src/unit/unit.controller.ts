import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UnitService } from './unit.service';
import { Unit } from 'src/entities/unit.entity';

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
}
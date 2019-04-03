import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CutService } from './cut.service';
import { Cut } from 'src/entities/cut.entity';

@Controller('cut')
export class CutController {
    constructor(private readonly cutService: CutService) {

    }

    @Get()
    findAll(): Promise<Cut[]> {
        return this.cutService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Cut> {
        return this.cutService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Cut): Promise<Cut> {
        return this.cutService.upsertOne(data);
    }
}

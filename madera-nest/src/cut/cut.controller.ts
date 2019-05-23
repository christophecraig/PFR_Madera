import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CutService } from './cut.service';
import { Cut } from '@entities/cut.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('cut')
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

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.cutService.deleteOne(id);
    }
}

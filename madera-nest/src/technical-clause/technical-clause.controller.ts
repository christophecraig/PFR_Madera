import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { TechnicalClauseService } from './technical-clause.service';
import { TechnicalClause } from '@entities/technical-clause.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('technical-clause')
@Controller('technical-clause')
export class TechnicalClauseController {
    constructor(private readonly technicalClauseService: TechnicalClauseService) {

    }

    @Get()
    findAll(): Promise<TechnicalClause[]> {
        return this.technicalClauseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<TechnicalClause> {
        return this.technicalClauseService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: TechnicalClause): Promise<TechnicalClause> {
        return this.technicalClauseService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.technicalClauseService.deleteOne(id);
    }
}

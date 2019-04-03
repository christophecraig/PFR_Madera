import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TechnicalClauseService } from './technical-clause.service';
import { TechnicalClause } from 'src/entities/technical-clause.entity';

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
}

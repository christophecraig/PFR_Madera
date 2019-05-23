import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { RangeService } from './range.service';
import { Range } from '@entities/range.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('range')
@Controller('range')
export class RangeController {
    constructor(private readonly rangeService: RangeService) {

    }

    @Get()
    findAll(): Promise<Range[]> {
        return this.rangeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Range> {
        return this.rangeService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Range): Promise<Range> {
        return this.rangeService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.rangeService.deleteOne(id);
    }
}

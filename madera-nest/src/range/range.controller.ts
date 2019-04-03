import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RangeService } from './range.service';
import { Range } from 'src/entities/range.entity';

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
}

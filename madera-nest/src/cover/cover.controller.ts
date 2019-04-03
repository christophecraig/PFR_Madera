import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CoverService } from './cover.service';
import { Cover } from 'src/entities/cover.entity';

@Controller('cover')
export class CoverController {
    constructor(private readonly coverService: CoverService) {

    }

    @Get()
    findAll(): Promise<Cover[]> {
        return this.coverService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Cover> {
        return this.coverService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Cover): Promise<Cover> {
        return this.coverService.upsertOne(data);
    }
}

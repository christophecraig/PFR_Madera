import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { RankService } from './rank.service';
import { Rank } from '@entities/rank.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('rank')
@Controller('rank')
export class RankController {
    constructor(private readonly rankService: RankService) {

    }

    @Get()
    findAll(): Promise<Rank[]> {
        return this.rankService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Rank> {
        return this.rankService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Rank): Promise<Rank> {
        return this.rankService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.rankService.deleteOne(id);
    }
}

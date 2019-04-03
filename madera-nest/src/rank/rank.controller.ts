import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RankService } from './rank.service';
import { Rank } from 'src/entities/rank.entity';

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
}

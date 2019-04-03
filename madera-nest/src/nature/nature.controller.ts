import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { NatureService } from './nature.service';
import { Nature } from 'src/entities/nature.entity';

@Controller('nature')
export class NatureController {
    constructor(private readonly natureService: NatureService) {

    }

    @Get()
    findAll(): Promise<Nature[]> {
        return this.natureService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Nature> {
        return this.natureService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Nature): Promise<Nature> {
        return this.natureService.upsertOne(data);
    }
}

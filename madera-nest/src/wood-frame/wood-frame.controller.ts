import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { WoodFrameService } from './wood-frame.service';
import { WoodFrame } from '@entities/wood-frame.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('wood-frame')
@Controller('wood-frame')
export class WoodFrameController {
    constructor(private readonly woodFrameService: WoodFrameService) {

    }

    @Get()
    findAll(): Promise<WoodFrame[]> {
        return this.woodFrameService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<WoodFrame> {
        return this.woodFrameService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: WoodFrame): Promise<WoodFrame> {
        return this.woodFrameService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.woodFrameService.deleteOne(id);
    }
}

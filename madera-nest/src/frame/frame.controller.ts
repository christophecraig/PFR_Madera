import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { FrameService } from './frame.service';
import { Frame } from 'src/entities/frame.entity';

@Controller('frame')
export class FrameController {
    constructor(private readonly frameService: FrameService) {

    }

    @Get()
    findAll(): Promise<Frame[]> {
        return this.frameService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Frame> {
        return this.frameService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Frame): Promise<Frame> {
        return this.frameService.upsertOne(data);
    }
}

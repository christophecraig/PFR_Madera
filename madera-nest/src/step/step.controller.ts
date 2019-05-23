import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { StepService } from './step.service';
import { Step } from '@entities/step.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('step')
@Controller('step')
export class StepController {
    constructor(private readonly stepService: StepService) {

    }

    @Get()
    findAll(): Promise<Step[]> {
        return this.stepService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Step> {
        return this.stepService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Step): Promise<Step> {
        return this.stepService.upsertOne(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.stepService.deleteOne(id);
    }
}

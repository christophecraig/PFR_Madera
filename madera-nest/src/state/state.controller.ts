import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { StateService } from './state.service';
import { State } from '@entities/state.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('state')
@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) {

    }

    @Get()
    findAll(): Promise<State[]> {
        return this.stateService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<State> {
        return this.stateService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: State): Promise<State> {
        return this.stateService.upsertOne(data);
    }
}

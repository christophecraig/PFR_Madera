import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InsulationService } from './insulation.service';
import { Insulation } from 'src/entities/insulation.entity';

@Controller('insulation')
export class InsulationController {
    constructor(private readonly insulationService: InsulationService) {

    }

    @Get()
    findAll(): Promise<Insulation[]> {
        return this.insulationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Insulation> {
        return this.insulationService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Insulation): Promise<Insulation> {
        return this.insulationService.upsertOne(data);
    }
}

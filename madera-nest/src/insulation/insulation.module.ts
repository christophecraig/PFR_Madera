import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Insulation } from '@entities/insulation.entity';
import { InsulationService } from './insulation.service';
import { InsulationController } from './insulation.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Insulation])],
    providers: [InsulationService],
    controllers: [InsulationController],
})
export class InsulationModule { }

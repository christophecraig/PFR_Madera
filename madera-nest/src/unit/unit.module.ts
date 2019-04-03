import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from 'src/entities/unit.entity';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Unit])],
    providers: [UnitService],
    controllers: [UnitController],
})
export class UnitModule { }

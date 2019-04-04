import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specification } from '@entities/specification.entity';
import { SpecificationService } from './specification.service';
import { SpecificationController } from './specification.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Specification])],
    providers: [SpecificationService],
    controllers: [SpecificationController],
})
export class SpecificationModule { }

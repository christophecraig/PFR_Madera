import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentType } from '@entities/component-type.entity';
import { ComponentTypeService } from './component-type.service';
import { ComponentTypeController } from './component-type.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ComponentType])],
    providers: [ComponentTypeService],
    controllers: [ComponentTypeController],
})
export class ComponentTypeModule { }

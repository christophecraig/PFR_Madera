import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Component } from 'src/entities/component.entity';
import { ComponentService } from './component.service';
import { ComponentController } from './component.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Component])],
    providers: [ComponentService],
    controllers: [ComponentController],
})
export class ComponentModule { }

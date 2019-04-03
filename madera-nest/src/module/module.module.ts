import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module as ModuleEntity } from 'src/entities/module.entity';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ModuleEntity])],
    providers: [ModuleService],
    controllers: [ModuleController],
})
export class ModuleModule { }

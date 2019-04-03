import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from 'src/entities/model.entity';
import { ModelService } from './model.service';
import { ModelController } from './model.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Model])],
    providers: [ModelService],
    controllers: [ModelController],
})
export class ModelModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Range } from '@entities/range.entity';
import { RangeService } from './range.service';
import { RangeController } from './range.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Range])],
    providers: [RangeService],
    controllers: [RangeController],
})
export class RangeModule { }

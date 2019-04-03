import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rank } from 'src/entities/rank.entity';
import { RankService } from './rank.service';
import { RankController } from './rank.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Rank])],
    providers: [RankService],
    controllers: [RankController],
})
export class RankModule { }

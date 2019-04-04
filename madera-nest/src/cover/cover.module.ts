import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cover } from '@entities/cover.entity';
import { CoverService } from './cover.service';
import { CoverController } from './cover.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Cover])],
    providers: [CoverService],
    controllers: [CoverController],
})
export class CoverModule { }

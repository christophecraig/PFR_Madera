import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frame } from '@entities/frame.entity';
import { FrameService } from './frame.service';
import { FrameController } from './frame.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Frame])],
    providers: [FrameService],
    controllers: [FrameController],
})
export class FrameModule { }

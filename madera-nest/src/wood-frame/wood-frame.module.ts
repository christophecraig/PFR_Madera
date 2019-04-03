import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WoodFrame } from 'src/entities/wood-frame.entity';
import { WoodFrameService } from './wood-frame.service';
import { WoodFrameController } from './wood-frame.controller';

@Module({
    imports: [TypeOrmModule.forFeature([WoodFrame])],
    providers: [WoodFrameService],
    controllers: [WoodFrameController],
})
export class WoodFrameModule { }

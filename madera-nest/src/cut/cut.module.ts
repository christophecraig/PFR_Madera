import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cut } from 'src/entities/cut.entity';
import { CutService } from './cut.service';
import { CutController } from './cut.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Cut])],
    providers: [CutService],
    controllers: [CutController],
})
export class CutModule { }

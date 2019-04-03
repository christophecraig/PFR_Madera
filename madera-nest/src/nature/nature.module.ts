import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nature } from 'src/entities/nature.entity';
import { NatureService } from './nature.service';
import { NatureController } from './nature.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Nature])],
    providers: [NatureService],
    controllers: [NatureController],
})
export class NatureModule { }

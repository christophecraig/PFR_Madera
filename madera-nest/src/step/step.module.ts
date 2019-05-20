import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Step } from '@entities/step.entity';
import { StepService } from './step.service';
import { StepController } from './step.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Step])],
    providers: [StepService],
    controllers: [StepController],
})
export class StepModule { }

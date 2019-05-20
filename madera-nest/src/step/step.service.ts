import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from '@entities/step.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StepService {
    constructor(
        @InjectRepository(Step)
        private readonly stepRepository: Repository<Step>,
    ) { }

    async findAll(): Promise<Step[]> {
        return this.stepRepository.find();
    }

    async findOne(id: number): Promise<Step> {
        return this.stepRepository.findOne(id);
    }

    async upsertOne(data: Step): Promise<Step> {
        let step = new Step();
        step = this.stepRepository.merge(step, data);
        return this.stepRepository.save(step);
    }
}

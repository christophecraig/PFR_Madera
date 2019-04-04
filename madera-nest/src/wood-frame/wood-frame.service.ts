import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WoodFrame } from '@entities/wood-frame.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WoodFrameService {
    constructor(
        @InjectRepository(WoodFrame)
        private readonly woodFrameRepository: Repository<WoodFrame>,
    ) { }

    async findAll(): Promise<WoodFrame[]> {
        return this.woodFrameRepository.find();
    }

    async findOne(id: number): Promise<WoodFrame> {
        return this.woodFrameRepository.findOne(id);
    }

    async upsertOne(data: WoodFrame): Promise<WoodFrame> {
        let woodFrame = new WoodFrame();
        woodFrame = this.woodFrameRepository.merge(woodFrame, data);
        return this.woodFrameRepository.save(woodFrame);
    }
}

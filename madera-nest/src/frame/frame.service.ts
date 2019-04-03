import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Frame } from 'src/entities/frame.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FrameService {
    constructor(
        @InjectRepository(Frame)
        private readonly frameRepository: Repository<Frame>,
    ) { }

    async findAll(): Promise<Frame[]> {
        return this.frameRepository.find();
    }

    async findOne(id: number): Promise<Frame> {
        return this.frameRepository.findOne(id);
    }

    async upsertOne(data: Frame): Promise<Frame> {
        let frame = new Frame();
        frame = this.frameRepository.merge(frame, data);
        return this.frameRepository.save(frame);
    }
}

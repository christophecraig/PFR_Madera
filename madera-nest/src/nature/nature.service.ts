import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nature } from 'src/entities/nature.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NatureService {
    constructor(
        @InjectRepository(Nature)
        private readonly natureRepository: Repository<Nature>,
    ) { }

    async findAll(): Promise<Nature[]> {
        return this.natureRepository.find();
    }

    async findOne(id: number): Promise<Nature> {
        return this.natureRepository.findOne(id);
    }

    async upsertOne(data: Nature): Promise<Nature> {
        let nature = new Nature();
        nature = this.natureRepository.merge(nature, data);
        return this.natureRepository.save(nature);
    }
}

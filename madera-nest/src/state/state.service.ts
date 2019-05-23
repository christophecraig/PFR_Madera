import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from '@entities/state.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(State)
        private readonly stateRepository: Repository<State>,
    ) { }

    async findAll(): Promise<State[]> {
        return this.stateRepository.find();
    }

    async findOne(id: number): Promise<State> {
        return this.stateRepository.findOne(id);
    }

    async upsertOne(data: State): Promise<State> {
        let state = new State();
        state = this.stateRepository.merge(state, data);
        return this.stateRepository.save(state);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.stateRepository.delete(id);
    }
}

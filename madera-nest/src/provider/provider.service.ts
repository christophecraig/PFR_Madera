import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from '@entities/provider.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class ProviderService {
    constructor(
        @InjectRepository(Provider)
        private readonly providerRepository: Repository<Provider>,
    ) { }

    async findAll(): Promise<Provider[]> {
        return this.providerRepository.find();
    }

    async findOne(id: number): Promise<Provider> {
        return this.providerRepository.findOne(id);
    }

    async upsertOne(data: Provider): Promise<Provider> {
        let provider = new Provider();
        provider = this.providerRepository.merge(provider, data);
        return this.providerRepository.save(provider);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return this.providerRepository.delete(id);
    }
}

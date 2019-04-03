import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from 'src/entities/quote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuoteService {
    constructor(
        @InjectRepository(Quote)
        private readonly quoteRepository: Repository<Quote>,
    ) { }

    async findAll(): Promise<Quote[]> {
        return this.quoteRepository.find();
    }

    async findOne(id: number): Promise<Quote> {
        return this.quoteRepository.findOne(id);
    }

    async upsertOne(data: Quote): Promise<Quote> {
        let quote = new Quote();
        quote = this.quoteRepository.merge(quote, data);
        return this.quoteRepository.save(quote);
    }
}

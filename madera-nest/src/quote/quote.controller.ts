import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Quote } from 'src/entities/quote.entity';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
    constructor(private readonly quoteService: QuoteService) { }

    @Get()
    findAll(): Promise<Quote[]> {
        return this.quoteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Quote> {
        return this.quoteService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Quote): Promise<Quote> {
        return this.quoteService.upsertOne(data);
    }
}

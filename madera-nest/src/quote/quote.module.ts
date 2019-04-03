import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from 'src/entities/quote.entity';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Quote])],
    providers: [QuoteService],
    controllers: [QuoteController],
})
export class QuoteModule { }

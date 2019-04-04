import { Quote } from '@entities/quote.entity';

export class State {
    id: number;

    name: string;

    quotes: Quote[];
}

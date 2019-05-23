import { Quote } from '@entities/quote.entity';

export class Step {
    id: number;

    name: string;

    completion: number;

    quotes: Quote[];
}

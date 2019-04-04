import { Quote } from '@entities/quote.entity';
import { Rank } from '@entities/rank.entity';
import { Customer } from '@entities/customer.entity';

export class User {
    id: number;

    email: string;

    password: string;

    salt: string;

    lastName: string;

    firstName: string;

    active: boolean;

    quotes: Quote[];

    customers: Customer[];

    rank: Rank;
}

import { Quote } from '@entities/quote.entity';
import { User } from '@entities/user.entity';

export class Customer {
    id: number;

    ref: string;

    firstName: string;

    lastName: string;

    address: string;

    quotes: Quote[];

    users: User[];
}

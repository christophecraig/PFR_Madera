import { User } from '@entities/user.entity';

export class Rank {
    id: number;

    name: string;

    users: User[];
}

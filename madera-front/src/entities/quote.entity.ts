import { Customer } from '@entities/customer.entity';
import { User } from '@entities/user.entity';
import { Module } from '@entities/module.entity';
import { Range } from '@entities/range.entity';
import { State } from '@entities/state.entity';
import { Step } from '@entities/step.entity';

export class Quote {
    id: number;

    ref: string;

    name: string;

    date: Date;

    state: State;

    customer: Customer;

    user: User;

    modules: Module[];

    range?: Range;

    step: Step;
}

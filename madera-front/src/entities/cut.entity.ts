import { Module } from '@entities/module.entity';

export class Cut {
    id: number;

    name: string;

    modules: Module[];
}

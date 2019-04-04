import { Module } from '@entities/module.entity';
import { Range } from '@entities/range.entity';

export class Model {
    id: number;

    name: string;

    modules: Module[];

    range: Range;
}

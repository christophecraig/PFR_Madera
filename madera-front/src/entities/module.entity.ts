import { Quote } from '@entities/quote.entity';
import { Cut } from '@entities/cut.entity';
import { Model } from '@entities/model.entity';
import { Component } from '@entities/component.entity';
import { Range } from '@entities/range.entity';
import { Specification } from './specification.entity';
import { Unit } from './unit.entity';

export class Module {
    id: number;

    name: string;

    quotes: Quote[];

    cut: Cut;

    specification: Specification;

    unit: Unit;

    models: Model[];

    components: Component[];

    ranges: Range[];

}

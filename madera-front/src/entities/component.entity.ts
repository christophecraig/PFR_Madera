import { Module } from '@entities/module.entity';
import { TechnicalClause } from '@entities/technical-clause.entity';
import { ComponentType } from '@entities/component-type.entity';
import { Provider } from '@entities/provider.entity';
import { Specification } from './specification.entity';
import { Unit } from './unit.entity';

export class Component {
    id: number;

    name: string;

    technicalClauses: TechnicalClause[];

    componentType: ComponentType;

    modules: Module[];

    provider: Provider;

    specification: Specification;

    unit: Unit;

}

import { Module } from '@entities/module.entity';
import { Component } from './component.entity';

export class Specification {
    id: number;

    name: string;

    components: Component[];

    modules: Module[];
}

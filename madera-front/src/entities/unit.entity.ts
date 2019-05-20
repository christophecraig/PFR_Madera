import { Module } from '@entities/module.entity';
import { Component } from '@entities/component.entity';

export class Unit {
    id: number;

    name: string;

    components: Component[];

    modules: Module[];
}

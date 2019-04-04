import { Module } from '@entities/module.entity';
import { Component } from './component.entity';

export class Unit {
    id: number;

    name: string;

    components: Component[];

    modules: Module[];
}

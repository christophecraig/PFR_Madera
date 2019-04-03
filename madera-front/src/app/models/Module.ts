import { Cut } from './Cut';
import { Nature } from './Nature';
import { Component } from './Component';
import { Specification } from './Specification';
import { Unit } from './Unit';

export class Module {
    id: number;
    name: string;
    cuts: Cut[];
    nature: Nature;
    components: Component[];
    specifications?: Specification[];
    units?: Unit[];
}

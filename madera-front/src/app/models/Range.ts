import { Model } from './Model';
import { Insulation } from './Insulation';
import { Cover } from './Cover';
import { WoodFrame } from './WoodFrame';
import { Frame } from './Frame';

export class Range {
    id: number;
    name: string;
    insulation: Insulation;
    cover: Cover;
    woodFrame: WoodFrame;
    frame: Frame;
    models?: Model[];
}

import { Model } from '@entities/model.entity';
import { Module } from '@entities/module.entity';
import { Quote } from '@entities/quote.entity';
import { Insulation } from '@entities/insulation.entity';
import { Cover } from '@entities/cover.entity';
import { Frame } from '@entities/frame.entity';
import { WoodFrame } from '@entities/wood-frame.entity';

export class Range {
    id: number;

    name: string;

    models: Model[];

    modules: Module[];

    quotes: Quote[];

    insulation: Insulation;

    cover: Cover;

    frame: Frame;

    woodFrame: WoodFrame;
}

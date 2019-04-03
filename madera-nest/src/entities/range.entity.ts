import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Model } from './model.entity';
import { Module } from './module.entity';
import { Quote } from './quote.entity';
import { Insulation } from './insulation.entity';
import { Cover } from './cover.entity';
import { Frame } from './frame.entity';
import { WoodFrame } from './woodFrame.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Range {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Model, model => model.range)
    models: Model[];

    @ManyToMany(() => Module)
    @JoinTable()
    modules: Module[];

    @ManyToMany(() => Quote)
    quotes: Quote[];

    @ManyToOne(() => Insulation, insulation => insulation.ranges)
    insulation: Insulation;

    @ManyToOne(() => Cover, cover => cover.ranges)
    cover: Cover;

    @ManyToOne(() => Frame, frame => frame.ranges)
    frame: Frame;

    @ManyToOne(() => WoodFrame, woodFrame => woodFrame.ranges)
    woodFrame: WoodFrame;
}

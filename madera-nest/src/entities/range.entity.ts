import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Model } from './model.entity';
import { Module } from './module.entity';
import { Quote } from './quote.entity';
import { Insulation } from './insulation.entity';
import { Cover } from './cover.entity';
import { Frame } from './frame.entity';
import { WoodFrame } from './wood-frame.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Range {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Model, model => model.range, {
        eager: true
    })
    models: Model[];

    @ManyToMany(() => Module)
    @JoinTable()
    modules: Module[];

    @ManyToMany(() => Quote, {
        nullable: true
    })
    quotes: Quote[];

    @ManyToOne(() => Insulation, insulation => insulation.ranges, {
        eager: true
    })
    insulation: Insulation;

    @ManyToOne(() => Cover, cover => cover.ranges, {
        eager: true
    })
    cover: Cover;

    @ManyToOne(() => Frame, frame => frame.ranges, {
        eager: true
    })
    frame: Frame;

    @ManyToOne(() => WoodFrame, woodFrame => woodFrame.ranges, {
        eager: true
    })
    woodFrame: WoodFrame;
}

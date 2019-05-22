import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Model } from '@entities/model.entity';
import { Module } from '@entities/module.entity';
import { Quote } from '@entities/quote.entity';
import { Insulation } from '@entities/insulation.entity';
import { Cover } from '@entities/cover.entity';
import { Frame } from '@entities/frame.entity';
import { WoodFrame } from '@entities/wood-frame.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Range {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Model, model => model.range, {
        nullable: true,
    })
    @ApiModelPropertyOptional()
    models: Model[];

    @ManyToMany(() => Module, {
        eager: true,
    })
    @JoinTable()
    @ApiModelPropertyOptional()
    modules: Module[];

    @OneToMany(() => Quote, quote => quote.range, {
        nullable: true,
    })
    @ApiModelPropertyOptional()
    quotes: Quote[];

    @ManyToOne(() => Insulation, insulation => insulation.ranges, {
        eager: true,
    })
    @ApiModelPropertyOptional()
    insulation: Insulation;

    @ManyToOne(() => Cover, cover => cover.ranges, {
        eager: true,
    })
    @ApiModelPropertyOptional()
    cover: Cover;

    @ManyToOne(() => Frame, frame => frame.ranges, {
        eager: true,
    })
    @ApiModelPropertyOptional()
    frame: Frame;

    @ManyToOne(() => WoodFrame, woodFrame => woodFrame.ranges, {
        eager: true,
    })
    @ApiModelPropertyOptional()
    woodFrame: WoodFrame;
}

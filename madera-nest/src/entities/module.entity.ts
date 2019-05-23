import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { Quote } from '@entities/quote.entity';
import { Cut } from '@entities/cut.entity';
import { Model } from '@entities/model.entity';
import { Component } from '@entities/component.entity';
import { Range } from '@entities/range.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { Specification } from '@entities/specification.entity';
import { Unit } from '@entities/unit.entity';

@Entity()
export class Module {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToMany(() => Quote)
    @JoinTable()
    @ApiModelPropertyOptional()
    quotes: Quote[];

    @ManyToOne(() => Cut, cut => cut.modules, {
        eager: true,
    })
    @ApiModelProperty()
    cut: Cut;

    @ManyToOne(() => Specification, specification => specification.modules, {
        eager: true,
    })
    @ApiModelProperty()
    specification: Specification;

    @ManyToOne(() => Unit, unit => unit.modules, {
        eager: true,
    })
    @ApiModelProperty()
    unit: Unit;

    @ManyToMany(() => Model)
    @JoinTable()
    @ApiModelPropertyOptional()
    models: Model[];

    @ManyToMany(() => Component, {
        eager: true,
    })
    @JoinTable()
    @ApiModelPropertyOptional()
    components: Component[];

    @ManyToMany(() => Range)
    @JoinTable()
    @ApiModelPropertyOptional()
    ranges: Range[];

}

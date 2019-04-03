import { Module } from './module.entity';
import { OneToMany, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Specification } from './specification.entity';
import { Unit } from './unit.entity';
import { Component } from './component.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity() export class Nature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToOne(() => Specification, specification => specification.natures)
    @ApiModelProperty()
    specification: Specification;

    @ManyToOne(() => Unit, unit => unit.natures)
    @ApiModelProperty()
    unit: Unit;

    @OneToMany(() => Component, component => component.nature)
    components: Component[];

    @OneToMany(() => Module, module => module.nature)
    modules: Module[];
}

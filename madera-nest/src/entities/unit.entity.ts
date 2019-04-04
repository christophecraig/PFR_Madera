import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Module } from '@entities/module.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Component } from './component.entity';

@Entity()
export class Unit {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Component, component => component.unit)
    @ApiModelPropertyOptional()
    components: Component[];

    @ManyToMany(() => Module)
    @ApiModelPropertyOptional()
    modules: Module[];
}

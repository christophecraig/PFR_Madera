import { PrimaryGeneratedColumn, Column, ManyToMany, Entity, OneToMany } from 'typeorm';
import { Module } from '@entities/module.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Component } from '@entities/component.entity';

@Entity()
export class Specification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Component, component => component.specification)
    @ApiModelPropertyOptional()
    components: Component[];

    @ManyToMany(() => Module)
    @ApiModelPropertyOptional()
    modules: Module[];
}

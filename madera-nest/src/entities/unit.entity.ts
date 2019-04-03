import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Module } from './module.entity';
import { Nature } from './nature.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Unit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Nature, nature => nature.unit)
    @ApiModelPropertyOptional()
    natures: Nature[];

    @ManyToMany(() => Module)
    @ApiModelPropertyOptional()
    modules: Module[];
}

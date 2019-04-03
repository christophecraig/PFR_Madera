import { PrimaryGeneratedColumn, Column, ManyToMany, Entity, OneToMany } from 'typeorm';
import { Module } from './module.entity';
import { Nature } from './nature.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Specification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Nature, nature => nature.specification)
    natures: Nature[];

    @ManyToMany(() => Module)
    modules: Module[];
}

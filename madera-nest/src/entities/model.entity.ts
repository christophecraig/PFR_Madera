import { ManyToMany, PrimaryGeneratedColumn, Entity, Column, JoinTable, ManyToOne } from 'typeorm';
import { Module } from './module.entity';
import { Range } from './range.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToMany(() => Module)
    @JoinTable()
    @ApiModelProperty()
    modules: Module[];

    @ManyToOne(() => Range, range => range.models)
    @ApiModelProperty()
    range: Range;
}

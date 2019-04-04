import { ManyToMany, PrimaryGeneratedColumn, Entity, Column, JoinTable, ManyToOne } from 'typeorm';
import { Module } from '@entities/module.entity';
import { Range } from '@entities/range.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToMany(() => Module, {
        eager: true,
        nullable: true,
    })
    @JoinTable()
    @ApiModelProperty()
    modules: Module[];

    @ManyToOne(() => Range, range => range.models)
    @ApiModelProperty()
    range: Range;
}

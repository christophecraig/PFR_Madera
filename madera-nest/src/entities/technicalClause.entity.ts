import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Component } from './component.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class TechnicalClause {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToMany(() => Component)
    components: Component[];
}

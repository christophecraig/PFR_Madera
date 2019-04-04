import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Component } from '@entities/component.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity()
export class TechnicalClause {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToMany(() => Component)
    @ApiModelPropertyOptional()
    components: Component[];
}

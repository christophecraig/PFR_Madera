import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Component } from '@entities/component.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class ComponentType {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Component, component => component.componentType, {
        nullable: true,
    })
    @ApiModelPropertyOptional()
    components: Component[];
}

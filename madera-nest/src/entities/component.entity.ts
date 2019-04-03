import { PrimaryGeneratedColumn, Column, ManyToMany, Entity, JoinTable, ManyToOne } from 'typeorm';
import { Module } from './module.entity';
import { TechnicalClause } from './technicalClause.entity';
import { Nature } from './nature.entity';
import { ComponentType } from './componentType.entity';
import { Provider } from './provider.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Component {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToMany(() => TechnicalClause)
    @JoinTable()
    @ApiModelPropertyOptional()
    technicalClauses: TechnicalClause[];

    @ManyToOne(() => Nature, nature => nature.components)
    @ApiModelProperty()
    nature: Nature;

    @ManyToOne(() => ComponentType, componentType => componentType.components)
    @ApiModelProperty()
    componentType: ComponentType;

    @ManyToMany(() => Module)
    modules: Module[];

    @ManyToOne(() => Provider, provider => provider.components)
    @ApiModelProperty()
    provider: Provider;
}

import { PrimaryGeneratedColumn, Column, ManyToMany, Entity, JoinTable, ManyToOne } from 'typeorm';
import { Module } from '@entities/module.entity';
import { TechnicalClause } from '@entities/technical-clause.entity';
import { ComponentType } from '@entities/component-type.entity';
import { Provider } from '@entities/provider.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { Specification } from '@entities/specification.entity';
import { Unit } from '@entities/unit.entity';

@Entity()
export class Component {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToMany(() => TechnicalClause, {
        eager: true,
    })
    @JoinTable()
    @ApiModelPropertyOptional()
    technicalClauses: TechnicalClause[];

    @ManyToOne(() => ComponentType, componentType => componentType.components, {
        eager: true,
    })
    @ApiModelProperty()
    componentType: ComponentType;

    @ManyToMany(() => Module)
    @ApiModelProperty()
    modules: Module[];

    @ManyToOne(() => Provider, provider => provider.components, {
        // eager: true,
    })
    @ApiModelProperty()
    provider: Provider;

    @ManyToOne(() => Specification, specification => specification.components, {
        eager: true,
    })
    @ApiModelProperty()
    specification: Specification;

    @ManyToOne(() => Unit, unit => unit.components, {
        eager: true,
    })
    @ApiModelProperty()
    unit: Unit;

}

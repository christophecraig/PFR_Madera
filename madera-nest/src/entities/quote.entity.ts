import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Customer } from '@entities/customer.entity';
import { User } from '@entities/user.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Module } from '@entities/module.entity';
import { Range } from '@entities/range.entity';
import { State } from '@entities/state.entity';
import { Step } from '@entities/step.entity';

import { IsDate } from 'class-validator';

@Entity()
export class Quote {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    ref: string;

    @Column()
    @ApiModelProperty()
    name: string;

    @Column()
    @ApiModelProperty()
    // @IsDate()
    date: Date;

    @ManyToOne(() => State, state => state.quotes, {
        eager: true,
        nullable: true,
    })
    @ApiModelProperty()
    state: State;

    @ManyToOne(() => Customer, customer => customer.quotes, {
        eager: true,
    })
    @ApiModelProperty()
    customer: Customer;

    @ManyToOne(() => User, user => user.quotes, {
        eager: true,
    })
    @ApiModelProperty()
    user: User;

    @ManyToMany(() => Module, {
        eager: true,
        // nullable: true,
    })
    @JoinTable()
    @ApiModelPropertyOptional()
    modules: Module[];

    @ManyToOne(() => Range, range => range.quotes, {
        eager: true,
        nullable: true,
    })
    @ApiModelPropertyOptional()
    range?: Range;

    @ManyToOne(() => Step, step => step.quotes, {
        eager: true,
    })
    step: Step;

}

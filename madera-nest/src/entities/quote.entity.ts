import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Customer } from './customer.entity';
import { User } from './user.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Module } from './module.entity';
import { Range } from './range.entity';
import { State } from './state.entity';

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
        eager: true
    })
    @ApiModelProperty()
    state: State;

    @ManyToOne(() => Customer, customer => customer.quotes)
    @ApiModelProperty()
    customer: Customer;

    @ManyToOne(() => User, user => user.quotes)
    @ApiModelProperty()
    user: User;

    @ManyToMany(() => Module, {
        nullable: true,
    })
    @JoinTable()
    modules?: Module[];

    @ManyToMany(() => Range, {
        nullable: true,
    })
    @JoinTable()
    ranges?: Range[];

}

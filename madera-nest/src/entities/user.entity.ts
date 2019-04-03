import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Quote } from './quote.entity';
import { Rank } from './rank.entity';
import { Customer } from './customer.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    email: string;

    @Column()
    @ApiModelProperty()
    password: string;

    @Column()
    @ApiModelProperty()
    salt: string;

    @Column()
    @ApiModelProperty()
    lastName: string;

    @Column()
    @ApiModelProperty()
    firstName: string;

    @Column()
    @ApiModelProperty()
    active: boolean;

    @OneToMany(() => Quote, quote => quote.customer)
    @ApiModelProperty()
    quotes: Quote[];

    @ManyToMany(() => Customer)
    @JoinTable()
    @ApiModelProperty()
    customers: Customer[];

    @ManyToOne(() => Rank, rank => rank.users)
    @ApiModelProperty()
    rank: Rank;
}

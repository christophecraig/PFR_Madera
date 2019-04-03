import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Quote } from './quote.entity';
import { User } from './user.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    ref: string;

    @Column()
    @ApiModelProperty()
    firstName: string;

    @Column()
    @ApiModelProperty()
    lastName: string;

    @Column()
    @ApiModelProperty()
    address: string;

    @OneToMany(() => Quote, quote => quote.customer)
    quotes: Quote[];

    @ManyToMany(() => User)
    @ApiModelProperty()
    users: User[];
}

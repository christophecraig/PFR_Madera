import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Quote } from '@entities/quote.entity';
import { User } from '@entities/user.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';

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

    @OneToMany(() => Quote, quote => quote.customer, {
        // eager: true,
        nullable: true,
    })
    @ApiModelPropertyOptional()
    quotes: Quote[];

    @ManyToMany(() => User)
    @JoinTable()
    @ApiModelProperty()
    users: User[];
}

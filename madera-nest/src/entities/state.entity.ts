import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Quote } from '@entities/quote.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class State {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Quote, quote => quote.state)
    @ApiModelPropertyOptional()
    quotes: Quote[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Quote } from '@entities/quote.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Step {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Quote, quote => quote.step)
    @ApiModelPropertyOptional()
    quotes: Quote[];
}

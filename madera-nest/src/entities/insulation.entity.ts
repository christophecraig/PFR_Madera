import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Range } from '@entities/range.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Insulation {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Range, range => range.insulation)
    @ApiModelPropertyOptional()
    ranges: Range[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Range } from '@entities/range.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity()
export class WoodFrame {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Range, range => range.woodFrame)
    @ApiModelPropertyOptional()
    ranges: Range[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Range } from './range.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class WoodFrame {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Range, range => range.woodFrame)
    ranges: Range[];
}

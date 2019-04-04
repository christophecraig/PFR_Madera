import { Module } from '@entities/module.entity';
import { OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Cut {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => Module, module => module.cut)
    @ApiModelPropertyOptional()
    modules: Module[];
}

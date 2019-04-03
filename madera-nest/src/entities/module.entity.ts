import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { Quote } from './quote.entity';
import { Cut } from './cut.entity';
import { Nature } from './nature.entity';
import { Model } from './model.entity';
import { Component } from './component.entity';
import { Range } from './range.entity';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Module {
    @PrimaryGeneratedColumn()
    @ApiModelPropertyOptional()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @ManyToMany(() => Quote)
    quotes: Quote[];

    @ManyToOne(() => Cut, cut => cut.modules)
    @JoinColumn()
    @ApiModelProperty()
    cut: Cut;

    @ManyToOne(() => Nature, nature => nature.modules)
    @JoinTable()
    @ApiModelProperty()
    nature: Nature;

    @ManyToMany(() => Model)
    models: Model[];

    @ManyToMany(() => Component)
    @JoinTable()
    @ApiModelPropertyOptional()
    components: Component[];

    @ManyToMany(() => Range)
    ranges: Range[];

}

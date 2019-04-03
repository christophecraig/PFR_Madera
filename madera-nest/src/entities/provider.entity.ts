import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Component } from './component.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Provider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    businessName: string;

    @Column()
    @ApiModelProperty()
    address: string;

    @Column()
    @ApiModelProperty()
    businessContact: string;

    @Column()
    @ApiModelProperty()
    paymentContact: string;

    @Column({ type: 'text' })
    @ApiModelProperty()
    description: string;

    @OneToMany(() => Component, component => component.provider)
    components: Component[];
}

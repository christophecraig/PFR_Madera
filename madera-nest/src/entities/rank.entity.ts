import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from './user.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Rank {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => User, user => user.rank)
    users: User[];
}

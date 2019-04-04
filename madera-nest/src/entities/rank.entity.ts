import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from '@entities/user.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Rank {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiModelProperty()
    name: string;

    @OneToMany(() => User, user => user.rank)
    @ApiModelPropertyOptional()
    users: User[];
}

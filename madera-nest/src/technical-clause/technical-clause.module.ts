import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalClause } from 'src/entities/technical-clause.entity';
import { TechnicalClauseService } from './technical-clause.service';
import { TechnicalClauseController } from './technical-clause.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TechnicalClause])],
    providers: [TechnicalClauseService],
    controllers: [TechnicalClauseController],
})
export class TechnicalClauseModule { }

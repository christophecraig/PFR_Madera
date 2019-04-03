import { Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { StateService } from './state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from 'src/entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  controllers: [StateController],
  providers: [StateService],
})
export class StateModule {}

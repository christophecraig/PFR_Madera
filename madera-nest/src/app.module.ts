import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { EnvModule } from './env/env.module';
import { DatabaseModule } from './database/database.module';
import { QuoteModule } from './quote/quote.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { StateModule } from './state/state.module';
import { FrameModule } from './frame/frame.module';
import { CutModule } from './cut/cut.module';
import { CoverModule } from './cover/cover.module';
import { ComponentTypeModule } from './component-type/component-type.module';
import { ComponentModule } from './component/component.module';
import { WoodFrameModule } from './wood-frame/wood-frame.module';
import { InsulationModule } from './insulation/insulation.module';
import { ModelModule } from './model/model.module';
import { ModuleModule } from './module/module.module';
import { ProviderModule } from './provider/provider.module';
import { RangeModule } from './range/range.module';
import { RankModule } from './rank/rank.module';
import { SpecificationModule } from './specification/specification.module';
import { TechnicalClauseModule } from './technical-clause/technical-clause.module';
import { UnitModule } from './unit/unit.module';
import { StepModule } from './step/step.module';

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    ComponentTypeModule,
    ComponentModule,
    CoverModule,
    CustomerModule,
    CutModule,
    FrameModule,
    InsulationModule,
    ModelModule,
    ModuleModule,
    ProviderModule,
    QuoteModule,
    RangeModule,
    RankModule,
    SpecificationModule,
    StateModule,
    StepModule,
    TechnicalClauseModule,
    UnitModule,
    UserModule,
    WoodFrameModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {

  constructor(private readonly connection: Connection) {

  }
}

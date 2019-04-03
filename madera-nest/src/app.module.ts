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

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    QuoteModule,
    UserModule,
    CustomerModule,
    StateModule,
    FrameModule,
    CutModule,
    CoverModule,
    ComponentTypeModule,
    ComponentModule,
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

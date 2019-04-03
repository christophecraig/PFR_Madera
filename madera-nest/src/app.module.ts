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

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    QuoteModule,
    UserModule,
    CustomerModule,
    StateModule,
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

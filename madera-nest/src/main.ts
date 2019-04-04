import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  app.useGlobalPipes(new ValidationPipe({
    // forbidUnknownValues: true,
    transform: true,
    transformOptions: {
      enableCircularCheck: true,
    },
  }));

  const options = new DocumentBuilder()
    .addTag('component')
    .addTag('component-type')
    .addTag('cover')
    .addTag('customer')
    .addTag('cut')
    .addTag('frame')
    .addTag('insulation')
    .addTag('model')
    .addTag('module')
    .addTag('nature')
    .addTag('provider')
    .addTag('quote')
    .addTag('range')
    .addTag('rank')
    .addTag('specification')
    .addTag('state')
    .addTag('technical-clause')
    .addTag('unit')
    .addTag('user')
    .addTag('wood-frame')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

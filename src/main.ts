import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(path.join(__dirname, '../..', 'client', 'build'));
  console.log(path.join(__dirname, '../..', 'client', 'build'))
  await app.listen(3000);
}
bootstrap();

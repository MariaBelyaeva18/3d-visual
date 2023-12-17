import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);

  app.enableCors({
    exposedHeaders: ['Content-Disposition'],
    credentials: true,
    origin: true,
  });

}
bootstrap();

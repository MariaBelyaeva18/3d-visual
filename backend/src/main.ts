import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function start() {
  const PORT = 5000;
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    exposedHeaders: ['Content-Disposition'],
    credentials: true,
    origin: true,
  });

  app.useGlobalPipes(
      new ValidationPipe({ transform: true, forbidUnknownValues: false }),
  );

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();

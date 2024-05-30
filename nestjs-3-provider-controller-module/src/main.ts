import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // NestJS 애플리케이션이 3000번 포트로 실행됩니다.
}
bootstrap();

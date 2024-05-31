import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe()); // 전역적으로 ValidationPipe를 사용한다고 설정합니다.
    await app.listen(3000);
}
bootstrap();

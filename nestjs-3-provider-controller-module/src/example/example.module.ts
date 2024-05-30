import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  controllers: [ExampleController],
  providers: [ExampleService], // 한번 이 부분을 주석 처리하고 실행해 보세요. Dependency 에러를 만날 수 있습니다.
})
export class ExampleModule {}

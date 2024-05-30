import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') // 이곳에 기재된 경로가 여기 Controller의 기본 Route가 됩니다.
export class AppController {
  // AppService를 주입 받았습니다.
  constructor(private readonly appService: AppService) {}

  @Get() // 이곳에 기재된 경로가 여기 Controller의 기본 Route 다음 하위 Route가 됩니다.
  getHello(): string {
    return this.appService.getHello(); // AppService에 구현된 함수를 호출할 수 있습니다.
  }
}

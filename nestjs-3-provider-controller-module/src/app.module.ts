import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [ExampleModule],
  controllers: [AppController], // AppController를 Controller로 주입합니다. 외부에서 해당 Controller의 정의에 따라 접근할 수 있습니다.
  providers: [AppService], // AppService를 Provider로 주입합니다. AppModule 하위에서 AppService를 사용할 수 있습니다.
})
export class AppModule {}

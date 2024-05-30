import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserDevService } from './example/user-dev.service';
import { UserTestService } from './example/user-test.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserService',
      useClass: UserService,
    },
    {
      provide: 'USER_DEV',
      useClass: UserDevService,
    },
    {
      provide: 'USER_TEST',
      useClass: UserTestService,
    },
  ],
})
export class UserModule {}

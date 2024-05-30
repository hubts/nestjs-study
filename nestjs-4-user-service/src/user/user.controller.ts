import { Controller, Inject } from '@nestjs/common';
import { IUserService } from './user.service.interface';

@Controller('user')
export class UserController {
  constructor(
    // @Inject('UserService')
    // 위의 주석을 해제하고 아래 @Inject를 주석처리하면, UserService에 정의된 메소드를 이용하게 됩니다.
    @Inject(
      /**
       * 특정 조건을 통해 주입되는 토큰의 이름을 구분
       * 예를 들어, 개발/테스트 실행 환경에 따라 토큰의 이름을 결정
       */
      true ? 'USER_DEV' : 'USER_TEST',
    )
    private readonly userService: IUserService,
  ) {}

  createUser() {
    return this.userService.createUser();
  }
}

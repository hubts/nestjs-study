export interface IUserService {
  //   createUser(
  //     nickname: string,
  //     email: string,
  //     password: string,
  //   ): Promise<boolean>;

  // 위의 메소드로 구현하게 되면 Parameters를 이용해야 Warning이 뜨지 않으므로 Parameters가 없는 아래 버전으로 이용

  createUser(): string;
}

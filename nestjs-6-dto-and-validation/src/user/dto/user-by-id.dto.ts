// 보통 출력 DTO에는 Validation을 적용하지 않습니다.
// 물론 필요한 경우 당연히 적용하는 것이 더 좋을 수 있습니다.

export class UserByIdDto {
    id: string;
    email: string;
    nickname: string;
    birth: string;
}

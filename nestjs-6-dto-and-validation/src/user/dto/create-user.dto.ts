import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    nickname: string; // 닉네임은 반드시 존재해야 하고, String 타입이어야 합니다.

    @IsNotEmpty()
    @IsEmail()
    email: string; // 이메일은 반드시 존재해야 하고, Email 형태(@를 포함하고 도메인 주소를 가지는 형태)여야 합니다.
}

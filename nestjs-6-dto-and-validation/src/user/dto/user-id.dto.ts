import { IsNotEmpty, IsString } from "class-validator";

export class UserIdDto {
    @IsNotEmpty()
    @IsString()
    id: string; // ID는 반드시 존재해야 하며, String 타입을 가져야 합니다.
}

import { Injectable } from "@nestjs/common";
import { User } from "./user";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserIdDto } from "./dto/user-id.dto";
import { UserByIdDto } from "./dto/user-by-id.dto";

@Injectable()
export class UserService {
    private users: User[] = [];

    createUser(dto: CreateUserDto): UserByIdDto {
        const { nickname, email } = dto;
        const user: User = {
            id: String(Math.floor(Math.random() * 1000)), // 0~1000 사이의 값을 무작위 할당합니다. (주의) 너무 많이 테스트하면 겹치는 불상사가 생길지도 모릅니다.
            password: "",
            birth: "",
            nickname,
            email,
        };
        this.users.push(user);
        return {
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            birth: user.birth,
        };
    }

    getUserById(dto: UserIdDto): UserByIdDto {
        const { id } = dto;
        const user = this.users.find(user => user.id === id);
        return {
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            birth: user.birth,
        };
    }
}

import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserByIdDto } from "./dto/user-by-id.dto";
import { UserIdDto } from "./dto/user-id.dto";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() body: CreateUserDto): UserByIdDto {
        return this.userService.createUser(body);
    }

    @Get("id/:id")
    getUser(@Param() params: UserIdDto): UserByIdDto {
        return this.userService.getUserById(params);
    }
}

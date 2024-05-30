import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("create")
    createUser(@Body() user: User): void {
        this.userService.createUser(user);
    }

    @Get("email/:email")
    findUserByEmail(@Param("email") email: string): User {
        return this.userService.findUserByEmail(email);
    }

    @Get()
    findUserByEmailQuery(@Query("email") email: string): User {
        return this.userService.findUserByEmail(email);
    }

    @Get("all")
    findAllUsers(): User[] {
        return this.userService.findAllUsers();
    }

    @Put("update")
    updateUser(@Body() user: User): void {
        this.userService.updateUser(user);
    }

    @Delete("email/:email")
    deleteUser(@Param("email") email: string): void {
        this.userService.deleteUser(email);
    }
}

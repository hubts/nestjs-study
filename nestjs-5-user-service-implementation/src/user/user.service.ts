import { Injectable } from "@nestjs/common";
import { User } from "./user";

@Injectable()
export class UserService {
    private users: User[] = [];

    // Delete the user
    deleteUser(email: string): void {
        const existingUserIndex = this.users.findIndex(
            user => user.email === email
        );
        if (existingUserIndex === -1) {
            return;
        }

        this.users.splice(existingUserIndex, 1);
    }

    // Update the user
    updateUser(updatingUser: User): void {
        const existingUserIndex = this.users.findIndex(
            user => user.email === updatingUser.email
        );
        if (existingUserIndex === -1) {
            return;
        }

        this.users[existingUserIndex] = updatingUser;
    }

    // Find a user by email
    findUserByEmail(email: string): User {
        const existingUser = this.users.find(user => user.email === email);
        if (!existingUser) {
            return;
        }

        return existingUser;
    }

    // Find all users
    findAllUsers(): User[] {
        const usersWithoutPassword = this.users.map(user => {
            return {
                ...user,
                password: "",
            };
        });

        return usersWithoutPassword;
    }

    // Create a new user
    createUser(newUser: User): void {
        const existingUser = this.users.filter(
            user => user.email === newUser.email
        );
        if (!existingUser) {
            return;
        }

        this.users.push(newUser);
    }
}

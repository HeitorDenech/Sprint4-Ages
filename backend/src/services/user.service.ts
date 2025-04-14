import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface"
import { UserRepository } from "src/repository/user.repository";
///////////////////////////////////////////////////////////////////////////////

@Injectable()
export class UserService 
{
    constructor(private userRepository: UserRepository) {}
    private readonly users: User[] = [];

    create(user: User)
    {
        this.users.push(user);
    }

    findAll(): User[] 
    {
        return this.users;
    }

    delete(id: number)
    {
        this.userRepository.delete(id);
    }
}
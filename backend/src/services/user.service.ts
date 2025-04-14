import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface"
import { UserRepository } from "src/repository/user.repository";
import { UpdateUserDto } from "src/dto/UpdateUser.dto";
import { CreateUserDto } from "src/dto/CreateUser.dto";
///////////////////////////////////////////////////////////////////////////////

@Injectable()
export class UserService 
{
    constructor(private readonly userRepository: UserRepository) {}

    private readonly users: User[] = [];

    create(data: CreateUserDto)
    {
        this.userRepository.create(data);
    }

    findAll(): User[] 
    {
        return this.users;
    }

    findOne(id: number)
    {
        return this.userRepository.findOne(id);
    }

    update(id: number, data: UpdateUserDto)
    {
        return this.userRepository.update(id, data);
    }

    delete(id: number)
    {
        this.userRepository.delete(id);
    }
}
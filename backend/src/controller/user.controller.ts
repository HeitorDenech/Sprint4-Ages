import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "../dto/CreateUser.dto";
import { UpdateUserDto } from "../dto/UpdateUser.dto";
import { User } from "../interfaces/user.interface"
import { UserService } from "../services/user.service";
///////////////////////////////////////////////////////////////////////////////

@Controller('user')
export class UserController
{
    constructor(private userService: UserService) {}


    @Post()
    async create(@Body() createUserDto: CreateUserDto)
    {
        this.userService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<User[]>
    {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number)
    {
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateUser: UpdateUserDto)
    {
        return this.userService.update(id, updateUser);
    }

    @Delete(':id')
    remove(@Param('id') id: number)
    {
        return this.userService.delete(id);
    }
}
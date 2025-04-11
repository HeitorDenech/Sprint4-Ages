import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "../dto/CreateUser.dto";
import { UpdateUser } from "../dto/UpdateUser.dto";

@Controller('user')
export class UserController
{
    @Post()
    async create(@Body() user: User)
    {
        return 'This action adds a net user';
    }

    @Get()
    findAll(): string
    {
        return 'This action returns all users';
    }

    @Get(':id')
    findOne(@Param('id') id: string)
    {
        return `This action returns a #${id} user`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUser: UpdateUser)
    {
        return `This action updates a #${id} user`;
    }
}
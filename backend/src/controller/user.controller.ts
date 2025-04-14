import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUser } from "../dto/CreateUser.dto";
import { UpdateUser } from "../dto/UpdateUser.dto";
import { User } from "../interfaces/user.interface"
import { UserService } from "../services/user.service";
///////////////////////////////////////////////////////////////////////////////

@Controller('user')
export class UserController
{
    constructor(private userService: UserService) {}


    @Post()
    async create(@Body() createUserDto: CreateUser)
    {
        this.userService.create(createUserDto);
        return 'This action adds a net user';
    }

    @Get()
    async findAll(): Promise<User[]>
    {
        return this.userService.findAll();
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

    @Delete(':id')
    remove(@Param('id') id:string)
    {
        return `This action removes a #${id} user`;
    }
}
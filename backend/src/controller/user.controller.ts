import { Controller, Get } from '@nestjs/common';

@Controller('User')
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all User';
  }
}


import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('User')
export class UserController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all User';
  }
}
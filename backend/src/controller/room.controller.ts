
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('Room')
export class RoomController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all Room';
  }
}
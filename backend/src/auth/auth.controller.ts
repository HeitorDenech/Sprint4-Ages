import { Controller, Post, Body, ValidationPipe, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../dto/CreateUser.dto';
 

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Request() req)
  {
    return this.authService.login(req.user);
  }

  @Post("register")
  async register(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    throw new  Error('Implementar ainda');
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../services/user.service';
import * as bcrypt from "bcrypt";
import { User } from 'generated/prisma';
import { JwtService } from '@nestjs/jwt';
///////////////////////////////////////////////////////////////////////////////

type SafeUser = Omit<User, "password">;


@Injectable()
export class AuthService {

  constructor(private usersService: UserService,
              private jwtService: JwtService) {}



  async validateUser(email: string, pass: string) : Promise<SafeUser | null> {
    const user = await this.usersService.findByEmail(email);

    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }
  
    const { password, ...result } = user;
    return result;
  }

  async login(user: SafeUser) {
    const payload = { email: user.email, sub: user.id};


    return {
      acess_token: await this.jwtService.signAsync(payload),
    };
  }
}

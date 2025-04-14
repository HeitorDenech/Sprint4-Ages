import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UpdateUserDto } from '../dto/UpdateUser.dto';
///////////////////////////////////////////////////////////////////////////////

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(data: CreateUserDto) {
    return this.prisma.
  }

  findAll() {
    return this.prisma.place.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.place.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.place.delete({ where: { id } });
  }
}

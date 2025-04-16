import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { PrismaService } from 'src/prisma.service';
// import { PrismaModule } from '../prisma/prisma.module';
import { UserRepository } from 'src/repository/user.repository';
import { UserService } from 'src/services/user.service';
///////////////////////////////////////////////////////////////////////////////

@Module({
   // imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService, UserRepository, PrismaService],
    exports: [UserRepository, UserService]
})
export class UserModule {}

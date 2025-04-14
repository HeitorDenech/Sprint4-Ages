import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { UserService } from 'src/services/user.service';
///////////////////////////////////////////////////////////////////////////////

@Module({
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}

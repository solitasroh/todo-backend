import { UserResolver } from './user.resolver';
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UserResolver],
})
export class UsersModule {}

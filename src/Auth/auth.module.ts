import { PasswordService } from '../services/password.service';
import { AuthResolver } from './auth.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: {
        expiresIn: '1y',
      },
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    PasswordService,
    JwtStrategy,
    GqlAuthGuard,
  ],
  exports: [GqlAuthGuard],
})
export class AuthModule {}

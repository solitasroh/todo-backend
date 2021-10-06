import { LoginInput } from './../Auth/dto/login.input';
import { SignupInput } from './dto/signup.input';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth.model';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async signup(@Args('data') data: SignupInput) {
    const { accessToken, refreshToken } = await this.authService.createUser(
      data,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Auth)
  async login(@Args('data') data: LoginInput) {
    const { accessToken, refreshToken } = await this.authService.login(
      data.email,
      data.password,
    );
    return {
      accessToken,
      refreshToken,
    };
  }
}

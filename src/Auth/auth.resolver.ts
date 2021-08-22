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
}

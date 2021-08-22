import { SignupInput } from './dto/signup.input';
import { AuthService } from './auth.service';
import { Auth } from './model/auth.model';
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

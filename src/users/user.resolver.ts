import { UsersService } from './users.service';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from './model/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => String)
  sayHello(): string {
    return 'hello world!';
  }

  @Query(() => String)
  async signUp() {
    return 'sign up';
  }
}

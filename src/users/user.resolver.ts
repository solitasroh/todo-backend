import { UsersService } from '../services/users.service';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => String)
  sayHello(): string {
    return 'hello world!';
  }
}

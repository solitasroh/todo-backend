import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/model/user.model';
@ObjectType()
export class Token {
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
}

@ObjectType()
export class Auth extends Token {
  @Field()
  user: User;
}

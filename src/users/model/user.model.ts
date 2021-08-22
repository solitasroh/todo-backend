import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/model/base.model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string;
  @HideField()
  password: string;
  @Field()
  name?: string;
}

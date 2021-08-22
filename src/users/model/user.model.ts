import { HideField, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/model/base.model';

@ObjectType()
export class User extends BaseModel {
  email: string;
  @HideField()
  password: string;
  name?: string;
}

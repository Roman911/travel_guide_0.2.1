import { InputType, Field } from '@nestjs/graphql'
import { IsEmail, MinLength, MaxLength } from 'class-validator'

@InputType()
export class LoginUserInput {
  @Field()
  @IsEmail()
  email: string

  @Field()
  @MinLength(6)
  @MaxLength(20)
  password: string
}
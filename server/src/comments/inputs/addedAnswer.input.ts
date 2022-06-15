import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class AnswerCommentInput {
  @Field(type => ID)
  id: string
  @Field(type => ID)
  commentId: string
  @Field()
  comment: string
  @Field()
  token: string
}
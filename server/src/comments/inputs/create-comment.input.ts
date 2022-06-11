import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class CommentInput {
  @Field()
  comment: string
  @Field()
  postId: string
  @Field()
  token: string
}
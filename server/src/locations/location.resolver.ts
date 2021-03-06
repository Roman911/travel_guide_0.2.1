import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql'
import { LocationService } from './locations.service'
import { CreateLocationDto } from './dto/create-location.dto'
import { Location, LocationDocument } from './locations.schema'
//import { ParamsPostInput } from './inputs/params-post.input'
//import { LikeInput } from '../likes/inputs/create-like.input'
//import { CommentInput } from '../comments/inputs/create-comment.input'
//import { AnswerCommentInput } from '../comments/inputs/addedAnswer.input'

@Resolver()
export class LocationsResolver {
  constructor(
    private locationsService: LocationService,
    @InjectModel(Location.name)
    private locationModel: Model<LocationDocument>
  ) { }

  @Query(() => [CreateLocationDto])
  async locations() {
    return this.locationsService.findAll()
  }

  @Query(() => CreateLocationDto)
  async location(@Args('locationID') locationID: string) {
    return this.locationsService.location(locationID)
  }

  //@Mutation(() => CreatePostDto)
  //async setLikeForPost(@Args('input') input: LikeInput) {
    //return this.postsService.setLike(input)
  //}

  //@Mutation(() => CreatePostDto)
  //async addCommentForPost(@Args('input') input: CommentInput) {
  // return this.postsService.addComment(input)
  //}

  //@Mutation(() => CreatePostDto)
  //async addAnswerForComment(@Args('input') input: AnswerCommentInput) {
  // return this.postsService.addAnswer(input)
  //}
}
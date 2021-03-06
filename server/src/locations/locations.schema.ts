import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { User } from '../users/users.schema'

export type LocationDocument = Location & mongoose.Document

@Schema()
class Upload {
  @Prop()
  url: string
}

@Schema()
export class Location {
  @Prop()
  title: string
  @Prop()
  small_text: string
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Upload'})
  cover: Upload
  @Prop()
  coordinates: string[]
  @Prop()
  isType:string
  @Prop()
  address: string[]
  @Prop({ default: new Date })
  createdAt: Date
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User
}

export const LocationSchema = SchemaFactory.createForClass(Location)
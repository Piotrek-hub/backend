import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  text: string;

  @Prop()
  dateAdded: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

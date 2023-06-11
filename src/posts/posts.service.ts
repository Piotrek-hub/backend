import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDTO } from 'src/dto/posts/create-post.dto';
import { Post } from 'src/schemas/post.schema';

import contract from 'lib/contract';

import * as Web3Utils from 'web3-utils';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async queryAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
  async queryByID(id: string): Promise<Post> {
    return this.postModel.findOne({ _id: id }).exec();
  }

  async queryUserPosts(address: string): Promise<Post[]> {
    return this.postModel.find({ author: address }).exec();
  }

  async create(postDTO: CreatePostDTO) {
    const username = await contract.methods.users(postDTO.author).call();
    if (username == '') {
      throw new HttpException('Username not found', HttpStatus.UNAUTHORIZED);
    }

    const createdPost = new this.postModel(postDTO);
    return createdPost.save();
  }
}

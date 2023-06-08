import { HttpCode, HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDTO } from 'src/dto/posts/create-post.dto';
import { Post } from 'src/schemas/post.schema';

import ABI from '../contract/abi';
import Web3 from 'web3';
const Web3Utils = require('web3-utils');

var Contract = require('web3-eth-contract');
Contract.setProvider('https://rpc2.sepolia.org/');

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async queryAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
  async queryByID(id: string): Promise<Post> {
    return this.postModel.findOne({ _id: id }).exec();
  }

  async create(postDTO: CreatePostDTO) {
    var contract = new Contract(
      ABI,
      '0x6d3563a4e42516a0669F013386dEc54cb16Cd63c',
    );

    if (!Web3Utils.isAddress(postDTO.author)) {
      throw new HttpException(
        'Invalid author (author field is of type address or address is invalid)',
        401,
      );
    }

    const username = await contract.methods.users(postDTO.author).call();

    if (username == '') {
      throw new HttpException('Username not found', 401);
    }

    const createdPost = new this.postModel(postDTO);
    return createdPost.save();
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreatePostDTO } from 'src/dto/posts/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  async findAll() {
    const res = await this.postService.queryAll();

    return res;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const res = await this.postService.queryByID(id);

    return res;
  }

  @Post('create')
  async create(@Body() body: CreatePostDTO) {
    const res = await this.postService.create(body);

    return res;
  }
}

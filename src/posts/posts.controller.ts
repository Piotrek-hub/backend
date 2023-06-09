import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDTO } from 'src/dto/posts/create-post.dto';
import { PostsService } from './posts.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  async findAll() {
    return await this.postService.queryAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.postService.queryByID(id);
  }

  @UseGuards(AuthGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() body: CreatePostDTO) {
    return await this.postService.create(body);
  }
}

import {
  Body,
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
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

  @UseGuards(AuthGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Headers() headers, @Body() body: CreatePostDTO) {
    if (headers.address == body.author.toLowerCase()) {
      return await this.postService.create(body);
    }

    throw new HttpException('Wrong address', HttpStatus.UNAUTHORIZED);
  }
}

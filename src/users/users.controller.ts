import { Controller, Get, Headers, Param, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { PostsService } from 'src/posts/posts.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private postsService: PostsService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('me')
  async findMe(@Headers() headers) {
    const address = headers.address;
    const res = { user: null, posts: [] };
    res.user = await this.userService.queryByAddress(address);
    res.posts = await this.postsService.queryUserPosts(address);
    return res;
  }

  @Get(':address')
  async findByAddress(@Param('address') address: string) {
    return await this.userService.queryByAddress(address);
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDTO } from 'src/dto/users/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get(':address')
  async findByAddress(@Param('address') address: string) {
    return await this.userService.queryByAddress(address);
  }
}

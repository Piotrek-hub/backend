import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/users/create-user.dto';
import { LoginUserDTO } from 'src/dto/users/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @UsePipes(new ValidationPipe())
  async register(@Body() body: CreateUserDTO) {
    return await this.authService.register(body);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@Body() body: LoginUserDTO) {
    return await this.authService.login(body);
  }
}

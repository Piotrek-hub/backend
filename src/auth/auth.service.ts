import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import contract from 'lib/contract';
import { CreateUserDTO } from 'src/dto/users/create-user.dto';
import { LoginUserDTO } from 'src/dto/users/login-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(user: CreateUserDTO): Promise<any> {
    if (await this.usersService.checkIfExists(user)) {
      throw new HttpException(`User already exists`, HttpStatus.BAD_REQUEST);
    }

    return this.usersService.create(user);
  }

  async login(user: LoginUserDTO): Promise<any> {
    user.address = user.address.toLowerCase();

    if (!(await this.usersService.queryByAddress(user.address))) {
      throw new HttpException(
        'User doesnt exists in mongodb',
        HttpStatus.BAD_REQUEST,
      );
    }
    const username = await contract.methods.users(user.address).call();
    if (username == '') {
      throw new HttpException(
        'User doesnt exists on contract',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.usersService.queryByAddress(user.address);
  }
}

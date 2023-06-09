import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from 'src/dto/users/create-user.dto';
import { LoginUserDTO } from 'src/dto/users/login-user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async queryByAddress(address: string): Promise<User> {
    return await this.userModel.findOne({ address: address }).exec();
  }

  async checkIfExists(user: {
    address: string;
    name: string;
  }): Promise<boolean> {
    const exists = await this.userModel.exists({
      $or: [{ address: user.address }, { name: user.name }],
    });

    return exists !== null;
  }

  async create(userDTO: CreateUserDTO): Promise<User> {
    return new this.userModel(userDTO).save();
  }

  async login(userDTO: LoginUserDTO): Promise<User> {
    const userObject = await this.queryByAddress(userDTO.address);

    return userObject;
  }
}

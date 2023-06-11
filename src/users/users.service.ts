import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from 'src/dto/users/create-user.dto';
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
    console.log(exists);
    return exists !== null;
  }

  async create(userDTO: CreateUserDTO): Promise<User> {
    userDTO.address = userDTO.address.toLowerCase();
    return await new this.userModel(userDTO).save();
  }
}

import { IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  name: string;
}

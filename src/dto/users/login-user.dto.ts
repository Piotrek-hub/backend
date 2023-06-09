import { IsNotEmpty } from 'class-validator';

export class LoginUserDTO {
  @IsNotEmpty()
  address: string;
}

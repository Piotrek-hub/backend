import { IsNotEmpty } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  title: string;

  text: string;

  @IsNotEmpty()
  dateAdded: string;
}

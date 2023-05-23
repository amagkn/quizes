import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(4)
  @MaxLength(30)
  @IsNotEmpty()
  username: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;
}

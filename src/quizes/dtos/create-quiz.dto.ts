import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty()
  @MaxLength(245)
  title: string;
}

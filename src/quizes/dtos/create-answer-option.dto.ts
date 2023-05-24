import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAnswerOptionDto {
  @IsNotEmpty()
  @MaxLength(115)
  title: string;
}

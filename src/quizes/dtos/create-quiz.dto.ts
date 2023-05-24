import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  MaxLength,
  ValidateNested,
} from 'class-validator';

import { CreateQuestionDto } from './create-question.dto';

export class CreateQuizDto {
  @IsNotEmpty()
  @MaxLength(245)
  title: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}

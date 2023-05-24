import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  MaxLength,
  ValidateNested,
} from 'class-validator';

import { CreateAnswerOptionDto } from './create-answer-option.dto';

export class CreateQuestionDto {
  @IsNotEmpty()
  @MaxLength(245)
  title: string;

  @IsArray()
  @ArrayMinSize(2)
  @ValidateNested()
  @Type(() => CreateAnswerOptionDto)
  answerOptions: CreateAnswerOptionDto[];
}

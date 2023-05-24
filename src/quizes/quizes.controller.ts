import { Body, Controller, Post } from '@nestjs/common';

import { CreateQuizDto } from './dtos/create-quiz.dto';

@Controller('quizes')
export class QuizesController {
  @Post()
  createQuiz(@Body() createQuizDto: CreateQuizDto) {
    console.log(createQuizDto);
  }
}

import { Body, Controller, Post } from '@nestjs/common';

import { CreateQuizDto } from './dtos/create-quiz.dto';
import { QuizesService } from './quizes.service';

@Controller('quizes')
export class QuizesController {
  constructor(private quizesService: QuizesService) {}
  @Post()
  async createQuiz(@Body() createQuizDto: CreateQuizDto) {
    const createdQuize = await this.quizesService.createQuiz(createQuizDto);

    return createdQuize;
  }
}

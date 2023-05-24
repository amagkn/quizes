import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnswerOption } from './entities/answer.entity';
import { Question } from './entities/question.entity';
import { Quize } from './entities/quize.entity';
import { QuizesController } from './quizes.controller';
import { QuizesService } from './quizes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quize, Question, AnswerOption])],
  controllers: [QuizesController],
  providers: [QuizesService],
})
export class QuizesModule {}

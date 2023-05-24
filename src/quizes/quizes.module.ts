import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Question } from './entities/question.entity';
import { Quize } from './entities/quize.entity';
import { QuizesController } from './quizes.controller';
import { QuizesService } from './quizes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quize, Question])],
  controllers: [QuizesController],
  providers: [QuizesService],
})
export class QuizesModule {}

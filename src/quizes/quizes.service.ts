import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateQuizDto } from './dtos/create-quiz.dto';
import { Quize } from './entities/quize.entity';

@Injectable()
export class QuizesService {
  constructor(
    @InjectRepository(Quize) private quizRepository: Repository<Quize>,
  ) {}
  async createQuiz(createQuizDto: CreateQuizDto) {
    const newQuiz = this.quizRepository.create(createQuizDto);

    const result = await this.quizRepository.save(newQuiz, {});

    return result;
  }
}

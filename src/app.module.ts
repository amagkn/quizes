import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnswerOption } from './quizes/entities/answer.entity';
import { Question } from './quizes/entities/question.entity';
import { Quize } from './quizes/entities/quize.entity';
import { QuizesModule } from './quizes/quizes.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User, Quize, Question, AnswerOption],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    QuizesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

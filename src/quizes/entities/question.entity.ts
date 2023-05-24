import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AnswerOption } from './answer.entity';
import { Quize } from './quize.entity';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @ManyToOne(() => Quize, (quize) => quize.questions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'quize_id' })
  quize: Quize;

  @OneToMany(() => AnswerOption, (answer_option) => answer_option.question, {
    cascade: true,
  })
  answerOptions: AnswerOption[];
}

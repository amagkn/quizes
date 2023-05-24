import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Question } from './question.entity';

@Entity('quizes')
export class Quize {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @OneToMany(() => Question, (question) => question.quize, { cascade: true })
  questions: Question[];
}

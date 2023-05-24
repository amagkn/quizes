import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}

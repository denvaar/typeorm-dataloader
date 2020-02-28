import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ name: 'number_of_pages' })
  numberOfPages: number;

  @Column()
  rating: number;

  @ManyToOne(
    type => Author,
    author => author.books,
  )
  @JoinColumn({ name: 'author_id' })
  author: Author;

  @Column({ nullable: false, name: 'author_id' })
  authorId: number;
}

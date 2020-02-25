import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @OneToMany(
    type => Book,
    book => book.author,
  )
  books: Book[];
}

import { getConnection } from 'typeorm';

import { Author, Book } from './entities';

export const getBooks = async (): Promise<Array<Book>> => {
  /* Overfetching! */
  return await getConnection()
    .createQueryBuilder(Book, 'book')
    .leftJoinAndSelect('book.author', 'author')
    .getMany();
};

export const getAuthors = async (): Promise<Array<Author>> => {
  return await getConnection()
    .createQueryBuilder(Author, 'author')
    .getMany();
};

export const getBooksByAuthorId = async (
  authorId: number,
): Promise<Array<Book>> => {
  /* N+1 problem */
  return await getConnection()
    .createQueryBuilder(Book, 'book')
    .where('book.author_id = :authorId', { authorId })
    .getMany();
};

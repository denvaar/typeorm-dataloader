import { getConnection } from 'typeorm';
import DataLoader from 'dataloader';

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

export const getAuthor = async (
  id: number | undefined,
): Promise<Author | undefined> => {
  const author = await getConnection()
    .createQueryBuilder(Author, 'author')
    .where('author.id = :id', { id })
    .getOne();

  return author;
};

import DataLoader from 'dataloader';
import { getConnection } from 'typeorm';

import { Author, Book } from './entities';

const getBooksInBatch = async (
  authorIds: ReadonlyArray<number>,
): Promise<ReadonlyArray<ReadonlyArray<Book>>> => {
  const books = await getConnection()
    .createQueryBuilder(Book, 'book')
    .where('book.author_id IN (:...authorIds)', { authorIds })
    .getMany();

  return authorIds.map((k: number) => books.filter(b => b.authorId === k));
};

export const bookLoader = () =>
  new DataLoader<number, ReadonlyArray<Book>>(getBooksInBatch);

const getAuthorsInBatch = async (
  authorIds: ReadonlyArray<number>,
): Promise<ReadonlyArray<Author | undefined>> => {
  const authors = await getConnection()
    .createQueryBuilder(Author, 'author')
    .where('author.id IN (:...authorIds)', { authorIds })
    .getMany();

  return authorIds.map((k: number) => authors.find(a => a.id === k));
};

export const authorLoader = () => {
  return new DataLoader(getAuthorsInBatch);
};

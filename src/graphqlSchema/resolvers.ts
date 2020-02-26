import { getBooks, getAuthors, getBooksByAuthorId } from '../dbQueries';

import { Author, Book } from '../entities';

export default {
  Query: {
    books: async (): Promise<Array<Book>> => await getBooks(),
    authors: async (): Promise<Array<Author>> => await getAuthors(),
  },
  Book: {
    author: (book: Book): Author => book.author,
  },
  Author: {
    books: async (author: Author): Promise<Array<Book>> =>
      await getBooksByAuthorId(author.id),
  },
};

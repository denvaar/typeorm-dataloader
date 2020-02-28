import { getBooks, getAuthors, getAuthor } from '../dbQueries';

import { Author, Book } from '../entities';

export default {
  Query: {
    authors: async (): Promise<Array<Author>> => await getAuthors(),
    books: async (): Promise<Array<Book>> => await getBooks(),
  },
  Author: {
    books: async (author: Author, args: any, ctx: any): Promise<Array<Book>> =>
      await ctx.bookLoader.load(author.id),
  },

  Book: {
    author: async (
      book: Book,
      args: any,
      ctx: any,
    ): Promise<Author | undefined> =>
      await ctx.authorLoader.load(book.authorId),
  },
};

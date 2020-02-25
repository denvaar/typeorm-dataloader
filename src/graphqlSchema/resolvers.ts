import books from '../bookData';

export default {
  Query: {
    book: (p: void, { id }: { id: number }) => books.find(b => b.id === id),
    books: (): Array<Book> => books,
  },
  Book: {
    author: (book: Book): Author => book.author,
  },
};

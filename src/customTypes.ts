interface Author {
  firstName: string;
  lastName: string;
}

interface Book {
  id: number;
  title: string;
  numberOfPages: number;
  author: Author;
}

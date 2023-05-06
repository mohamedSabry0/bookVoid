import { useState } from 'react';
import BookForm from './BookForm';
import Book from './Book';

const BooksList = () => {
  const [books, setBooks] = useState([
    { title: 'Book 2', author: 'auth 2' },
    { title: 'Book 1', author: 'auth 1' },
  ]);
  return (
    <div>
      {books.map((book) => {
        const { title, author } = book;
        return <Book key={title} title={title} author={author} />;
      })}

      <BookForm setBooks={setBooks} />
    </div>
  );
};

export default BooksList;

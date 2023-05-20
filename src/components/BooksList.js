import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { toCamelCasedKey } from '../util/util';
import { booksState } from '../redux/books/booksSlice';
import fetchBooks from '../redux/books/booksThunk';

const BooksList = () => {
  const dispatch = useDispatch();
  // const books = useSelector((state) => state.books.books);
  const { books, error, status } = useSelector(booksState);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [dispatch, status]);

  if (status === 'succeeded') {
    return (
      <div className="books-list">
        {books.map((book) => {
          const {
            title, author, itemId, category,
          } = toCamelCasedKey(book);
          return (
            <Book
              key={itemId}
              id={itemId}
              category={category}
              title={title}
              author={author}
            />
          );
        })}
      </div>
    );
  }
  if (status === 'failed') {
    return (<p>{ error }</p>);
  }

  return (<p>Loading...</p>);
};

export default BooksList;

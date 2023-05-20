import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { toCamelCasedKey } from '../util/util';
import { booksState, fetchBooks } from '../redux/books/booksSlice';

function BooksList() {
  const dispatch = useDispatch();
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
}

export default BooksList;

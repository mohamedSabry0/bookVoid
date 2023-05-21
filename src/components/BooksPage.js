import { useSelector } from 'react-redux';
import { booksState } from '../redux/books/booksSlice';
import BookForm from './BookForm';
import BooksList from './BooksList';
import LoadingSpinner from './LoadingSpinner';

const BooksPage = () => {
  const { status, error, message } = useSelector(booksState);
  return (
    <div className="books-page">
      {status === 'succeeded' && <p>{message}</p>}
      {status === 'failed' && <p>{error}</p>}
      <BooksList />
      <LoadingSpinner status={status} />
      <BookForm />
    </div>
  );
};

export default BooksPage;

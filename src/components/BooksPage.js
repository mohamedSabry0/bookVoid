import { useSelector } from 'react-redux';
import { booksState } from '../redux/books/booksSlice';
import BookForm from './BookForm';
import BooksList from './BooksList';
import LoadingSpinner from './LoadingSpinner';

const BooksPage = () => {
  const { status, error, message } = useSelector(booksState);
  return (
    <>
      {status === 'succeeded' && <p>{message}</p>}
      {status === 'failed' && <p>{error}</p>}
      <BooksList />
      <LoadingSpinner status={status} />
      <BookForm />
    </>
  );
};

export default BooksPage;

import { useSelector } from 'react-redux';
import Book from './Book';
import toCamelCasedKey from '../util/util';

const BooksList = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      {books.map((book) => {
        const { title, author, itemId } = toCamelCasedKey(book);
        return <Book key={itemId} id={itemId} title={title} author={author} />;
      })}
    </>
  );
};

export default BooksList;

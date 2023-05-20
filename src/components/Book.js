import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  // const dispatch = useDispatch();
  const handleRemoveBook = () => {
    // dispatch(removeBook(id));
  };

  return (
    <div id={id} className="book">
      <p>
        {title}
        {' '}
        - by
        {' '}
        <span>{author}</span>
      </p>
      <button type="button" onClick={handleRemoveBook}> Remove </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;

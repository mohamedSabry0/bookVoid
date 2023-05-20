import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({
  title, author, id, category,
}) {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div id={id} className="book">
      <div>
        <span className="book-category">{category}</span>
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>

        <div className="actions-area">
          <button type="button">Comments</button>

          <button
            type="button"
            className="remove"
            onClick={handleRemoveBook}
          >
            Remove
          </button>

          <button type="button">Edit</button>
        </div>

      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;

import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div className="book">
      <p>
        {title}
        {' '}
        - by
        {' '}
        <span>{author}</span>
      </p>
      <button type="button"> Remove </button>
    </div>
  );
}

Book.propTypes = { title: PropTypes.string.isRequired, author: PropTypes.string.isRequired };

export default Book;

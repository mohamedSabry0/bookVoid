import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

export default function LoadingSpinner({ status }) {
  return (
    <div className={`spinner ${status}`}>
      <ClipLoader
        color="#307bbe"
        loading={status === 'loading'}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>Loading...</p>
    </div>
  );
}

LoadingSpinner.propTypes = { status: PropTypes.string.isRequired };

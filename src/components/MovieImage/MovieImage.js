import PropTypes from 'prop-types';
import { BsImage } from 'react-icons/bs';

const MovieImage = ({ movie: { original_title, poster_path } }) => {
  return (
    <>
      {poster_path ? (
        <img
          src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
      ) : (
        <BsImage size={200} color="#6b6969" />
      )}
    </>
  );
};

MovieImage.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};

export default MovieImage;

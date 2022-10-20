import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { BsImage } from 'react-icons/bs';
import { MovieItem, MovieItemImage, MovieItemTitle } from './MovieCard.styled';

const MovieCard = ({ movie: { id, original_title, poster_path } }) => {
  const location = useLocation();
  const currentLocation = '/movies';

  return (
    <MovieItem to={`${currentLocation}/${id}`} state={{ from: location }}>
      {poster_path ? (
        <MovieItemImage
          src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
      ) : (
        <BsImage size={200} color="#6b6969" />
      )}
      <MovieItemTitle> {original_title}</MovieItemTitle>
    </MovieItem>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};

export default MovieCard;

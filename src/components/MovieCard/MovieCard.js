import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { BsImage } from 'react-icons/bs';

const MovieCard = ({ movie: { id, original_title, poster_path } }) => {
  const location = useLocation();
  const currentLocation = '/movies';
  // location.pathname === '/movies' ? '/movies' : '/movies';

  return (
    <NavLink to={`${currentLocation}/${id}`} state={{ from: location }}>
      {poster_path ? (
        <img
          src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
      ) : (
        <BsImage size={200} color="#6b6969" />
      )}
      <div> {original_title}</div>
    </NavLink>
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

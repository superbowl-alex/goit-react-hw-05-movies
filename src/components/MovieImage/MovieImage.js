import PropTypes from 'prop-types';
import { BsFileImage } from 'react-icons/bs';
import { Image, WrapSvg } from './MovieImage.styled';

const MovieImage = ({ movie: { original_title, poster_path } }) => {
  return (
    <>
      {poster_path ? (
        <Image
          src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
          alt={original_title}
          loading="lazy"
        />
      ) : (
        <WrapSvg>
          <BsFileImage size={300} />
        </WrapSvg>
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

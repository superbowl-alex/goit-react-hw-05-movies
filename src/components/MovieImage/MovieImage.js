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

export default MovieImage;

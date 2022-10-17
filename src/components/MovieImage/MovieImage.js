const MovieImage = ({ movie: { original_title, poster_path } }) => {
  return (
    <img
      src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
      alt={original_title}
    />
  );
};

export default MovieImage;

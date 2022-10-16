import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../Services/fetchMovies';
import MovieDescription from './MovieDescription';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, original_title } = movie;
  return (
    <main>
      <button type="button">Go back</button>
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
        <MovieDescription movie={movie} />
      </div>
    </main>
  );
};

export default MovieDetails;

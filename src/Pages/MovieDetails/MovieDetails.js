import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../Services/fetchMovies';
import MovieDescription from '../../components/MovieDescription';
import MovieImage from '../../components/MovieImage';
import AdditionInform from '../../components/AdditionInform';

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

  return (
    <main>
      <button type="button">Go back</button>
      <MovieImage movie={movie} />
      <MovieDescription movie={movie} />
      <AdditionInform />
    </main>
  );
};

export default MovieDetails;

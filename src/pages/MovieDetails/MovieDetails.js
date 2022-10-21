import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/fetchMovies';
import MovieDescription from '../../components/MovieDescription';
import MovieImage from '../../components/MovieImage';
import AdditionInform from '../../components/AdditionInform';
import { GoBackLink, WrapDescription } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetch() {
      try {
        const film = await fetchMovieDetails(movieId);
        setMovie(film);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <main>
      <GoBackLink to={backLinkHref}>Go back</GoBackLink>
      <WrapDescription>
        <MovieImage movie={movie} />
        <MovieDescription movie={movie} />
      </WrapDescription>
      <AdditionInform movie={movie} state={{ from: backLinkHref }} />
    </main>
  );
};

export default MovieDetails;

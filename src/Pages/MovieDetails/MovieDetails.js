import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../../Services1/fetchMovies';
import MovieDescription from '../../components/MovieDescription';
import MovieImage from '../../components/MovieImage';
import AdditionInform from '../../components/AdditionInform';

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
      <Link to={backLinkHref}>Go back</Link>
      <MovieImage movie={movie} />
      <MovieDescription movie={movie} />
      <AdditionInform movie={movie} state={{ from: backLinkHref }} />
    </main>
  );
};

export default MovieDetails;

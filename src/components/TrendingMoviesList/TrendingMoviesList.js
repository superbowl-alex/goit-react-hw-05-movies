import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/fetchMovies';
import MovieCard from 'components/MovieCard';
import { TrendingList } from './TrendingMoviesList.styled';
import ErrorMessage from 'components/ErrorMessage';

const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetch();
  }, []);

  if (!trendingMovies) {
    return null;
  }

  return (
    <>
      {error && <ErrorMessage />}
      <TrendingList>
        {trendingMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </TrendingList>
    </>
  );
};

export default TrendingMoviesList;

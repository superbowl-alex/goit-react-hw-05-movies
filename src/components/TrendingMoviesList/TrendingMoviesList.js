import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/fetchMovies';
import MovieCard from 'components/MovieCard';
import { TrendingList } from './TrendingMoviesList.styled';

const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  if (!trendingMovies) {
    return null;
  }

  return (
    <TrendingList>
      {trendingMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </TrendingList>
  );
};

export default TrendingMoviesList;

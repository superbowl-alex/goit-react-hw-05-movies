import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrendingMovies } from '../../Services/fetchMovies';

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
    <ul>
      {trendingMovies.map(({ id, original_title }) => (
        <NavLink key={id} to={`movies/${id}`}>
          {original_title}
        </NavLink>
      ))}
    </ul>
  );
};

export default TrendingMoviesList;

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';

const SearchMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

SearchMoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default SearchMoviesList;

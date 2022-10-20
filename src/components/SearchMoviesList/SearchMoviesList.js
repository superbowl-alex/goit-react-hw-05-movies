import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import { SearchList } from './SearchMoviesList.styled';

const SearchMoviesList = ({ movies }) => {
  return (
    <SearchList>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SearchList>
  );
};

SearchMoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default SearchMoviesList;

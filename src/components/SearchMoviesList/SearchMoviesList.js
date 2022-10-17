import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchMoviesList = movies => {
  console.log(movies);
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <NavLink key={id} to={`movies/${id}`}>
          {original_title}
        </NavLink>
      ))}
    </ul>
  );
};

export default SearchMoviesList;

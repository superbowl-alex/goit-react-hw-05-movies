import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SearchMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <NavLink key={id} to={`${id}`} state={{ from: location }}>
          {original_title}
        </NavLink>
      ))}
    </ul>
  );
};

export default SearchMoviesList;

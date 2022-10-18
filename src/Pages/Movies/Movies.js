import React, { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import SearchMoviesList from 'components/SearchMoviesList';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../Services/fetchMovies';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (querySearch === '') {
      return;
    }
    async function fetch() {
      try {
        const movies = await fetchSearchMovies(querySearch);
        setSearchMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [querySearch]);

  const formSubmitHandler = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value.trim() });
  };

  return (
    <main>
      <Searchbar onSubmit={formSubmitHandler} />
      {searchMovies && <SearchMoviesList movies={searchMovies} />}
    </main>
  );
};

export default Movies;

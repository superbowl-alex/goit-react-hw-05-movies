import React, { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import SearchMoviesList from 'components/SearchMoviesList';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../Services/fetchMovies';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') ?? '';
  const formSubmitHandler = e => {
    e.preventDefault();
    const validQuery = querySearch.trim();
    setQuery(validQuery);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetch() {
      try {
        const movies = await fetchSearchMovies(query);
        console.log(movies);
        setSearchMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <Searchbar
        value={querySearch}
        onChange={updateQueryString}
        onSubmit={formSubmitHandler}
      />
      {searchMovies && <SearchMoviesList movies={searchMovies} />}
    </main>
  );
};

export default Movies;

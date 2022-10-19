import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar';
import SearchMoviesList from 'components/SearchMoviesList';
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
        if (movies.length === 0) {
          toast.warn('There are no films matching your search.', {
            theme: 'colored',
          });
        }
        setSearchMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [querySearch]);

  const formSubmitHandler = e => {
    e.preventDefault();
    const searchedQuery = e.currentTarget.elements.query.value.trim();
    if (searchedQuery === '') {
      toast.warn("Enter the movie's name you want to search.", {
        theme: 'colored',
      });
    }

    setSearchParams({ query: searchedQuery });
  };

  return (
    <main>
      <Searchbar onSubmit={formSubmitHandler} />
      {searchMovies && <SearchMoviesList movies={searchMovies} />}
      <ToastContainer />
    </main>
  );
};

export default Movies;

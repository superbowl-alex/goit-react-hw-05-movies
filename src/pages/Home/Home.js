import React from 'react';
import TrendingMoviesList from 'components/TrendingMoviesList';

const Home = () => {
  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMoviesList />
    </main>
  );
};

export default Home;

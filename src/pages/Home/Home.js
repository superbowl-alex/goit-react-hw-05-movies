import React from 'react';
import TrendingMoviesList from 'components/TrendingMoviesList';
import { Title } from './Home.styled';

const Home = () => {
  return (
    <main>
      <Title>Trending today</Title>
      <TrendingMoviesList />
    </main>
  );
};

export default Home;

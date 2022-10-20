import { Routes, Route } from 'react-router-dom';
import React from 'react';
import SharedLayout from 'components/SharedLayout';

const Home = React.lazy(() => import('../../Stor/Home'));
const Movies = React.lazy(() => import('../../Stor/Movies'));
const MovieDetails = React.lazy(() => import('../../Stor/MovieDetails'));
const Cast = React.lazy(() => import('../Cast'));
const Reviews = React.lazy(() => import('../Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

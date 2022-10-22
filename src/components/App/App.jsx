import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import OnlyScroll from 'only-scrollbar';
import SharedLayout from 'components/SharedLayout';

new OnlyScroll(document.scrollingElement, {
  damping: 0.8,
});

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

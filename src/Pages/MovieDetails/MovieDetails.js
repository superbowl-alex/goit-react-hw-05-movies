import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>Info about movie with id {movieId} </div>;
};

export default MovieDetails;

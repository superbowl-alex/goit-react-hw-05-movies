import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../Services/fetchMovies';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const movieCast = await fetchCast(movieId);
        setCast(movieCast);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <>
      {cast.map(({ id, original_name, character, profile_path }) => (
        <div key={id}>
          <img
            src={`https://www.themoviedb.org/t/p/w200${profile_path}`}
            alt={original_name}
          />
          <div>{original_name}</div>
          <div>Character: {character}</div>
        </div>
      ))}
    </>
  );
};

export default Cast;

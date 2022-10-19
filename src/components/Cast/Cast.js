import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../Services/fetchMovies';
import { IoIosPerson } from 'react-icons/io';

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
  if (cast.length === 0) {
    return (
      <div>
        Sorry, but we have no information about the actors of this movie.
      </div>
    );
  } else {
    return (
      <>
        {cast.map(({ id, original_name, character, profile_path }) => (
          <div key={id}>
            {profile_path ? (
              <img
                src={`https://www.themoviedb.org/t/p/w200${profile_path}`}
                alt={original_name}
              />
            ) : (
              <IoIosPerson size={200} color="#6b6969" />
            )}

            <div>{original_name}</div>
            <div>Character: {character}</div>
          </div>
        ))}
      </>
    );
  }
};

export default Cast;

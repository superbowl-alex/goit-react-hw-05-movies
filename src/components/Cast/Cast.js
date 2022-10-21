import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/fetchMovies';
import { IoIosPerson } from 'react-icons/io';
import ErrorMessage from 'components/ErrorMessage';
import {
  CastList,
  CastItem,
  CastImage,
  CastTitle,
  CharacterTitle,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const movieCast = await fetchCast(movieId);
        setCast(movieCast);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);

  useEffect(() => {
    window.scroll({
      top: 570,
      left: 0,
      behavior: 'smooth',
    });
  }, [cast]);

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
        {error && <ErrorMessage />}
        <CastList>
          {cast.map(({ id, original_name, character, profile_path }) => (
            <CastItem key={id}>
              {profile_path ? (
                <CastImage
                  src={`https://www.themoviedb.org/t/p/w200${profile_path}`}
                  alt={original_name}
                  loading="lazy"
                />
              ) : (
                <IoIosPerson size={230} />
              )}

              <CastTitle>{original_name}</CastTitle>
              <CharacterTitle>Character: {character}</CharacterTitle>
            </CastItem>
          ))}
        </CastList>
      </>
    );
  }
};

export default Cast;

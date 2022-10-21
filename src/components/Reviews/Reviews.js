import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/fetchMovies';
import ErrorMessage from 'components/ErrorMessage';
import { TitleReviews, TextReviews, AlertReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const movieReviews = await fetchReviews(movieId);
        setReviews(movieReviews);
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
  }, [reviews]);

  if (!reviews) {
    return null;
  }

  if (reviews.length === 0) {
    return (
      <AlertReviews>We don`t have any reviews for this movie.</AlertReviews>
    );
  } else {
    return (
      <>
        {error && <ErrorMessage />}
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <TitleReviews>Author: {author}</TitleReviews>
              <TextReviews>{content}</TextReviews>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default Reviews;

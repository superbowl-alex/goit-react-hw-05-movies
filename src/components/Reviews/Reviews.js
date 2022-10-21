import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/fetchMovies';
import ErrorMessage from 'components/ErrorMessage';

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

  if (!reviews) {
    return null;
  }

  if (reviews.length === 0) {
    return <div>We don`t have any reviews for this movie.</div>;
  } else {
    return (
      <>
        {error && <ErrorMessage />}
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <div>Author: {author}</div>
              <div>{content}</div>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default Reviews;

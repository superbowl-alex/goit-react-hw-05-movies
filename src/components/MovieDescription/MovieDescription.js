import PropTypes from 'prop-types';

const MovieDescription = ({
  movie: { original_title, overview, vote_average, genres, release_date },
}) => {
  const userScore = `${Math.round(vote_average * 10)} %`;
  const movieRelease = new Date(release_date).getFullYear();

  return (
    <>
      <div>
        {original_title} ({movieRelease})
      </div>
      <div>User score: {userScore}</div>
      <div>Overview</div>
      <div>{overview}</div>
      <div>Genres</div>
      <div>{genres.map(({ name }) => name).join(' ')}</div>
    </>
  );
};

MovieDescription.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
};

export default MovieDescription;

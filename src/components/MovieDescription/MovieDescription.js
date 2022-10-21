import PropTypes from 'prop-types';
import {
  WrapText,
  TitleDescription,
  SubTitleDescription,
} from './MovieDescription.styled';

const MovieDescription = ({
  movie: { original_title, overview, vote_average, genres, release_date },
}) => {
  const userScore = `${Math.round(vote_average * 10)} %`;
  const movieRelease = new Date(release_date).getFullYear();

  return (
    <WrapText>
      <TitleDescription>
        {original_title} ({movieRelease || 'Release date unknown'})
      </TitleDescription>
      <SubTitleDescription>User score: {userScore}</SubTitleDescription>
      <div>
        <SubTitleDescription>Overview</SubTitleDescription>
        <div>{overview}</div>
      </div>
      <div>
        <SubTitleDescription>Genres</SubTitleDescription>
        {genres.length > 0 ? (
          <div>{genres.map(({ name }) => name).join(', ')}</div>
        ) : (
          <div>{'No data'}</div>
        )}
      </div>
    </WrapText>
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

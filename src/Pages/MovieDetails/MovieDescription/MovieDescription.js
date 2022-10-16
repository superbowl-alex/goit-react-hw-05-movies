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
      {/* <div>{genres.map(({ name }) => name).join(' ')}</div> */}
    </>
  );
};

export default MovieDescription;

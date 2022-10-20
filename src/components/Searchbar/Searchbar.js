import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

Searchbar.prjpTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

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

export default Searchbar;

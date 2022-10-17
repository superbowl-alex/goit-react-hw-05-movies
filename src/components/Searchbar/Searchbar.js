const Searchbar = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          autoComplete="off"
          placeholder="Search movies"
          onChange={e => onChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Searchbar;

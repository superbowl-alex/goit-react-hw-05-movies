import PropTypes from 'prop-types';
import {
  SearchWrap,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchWrap>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search movies"
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </SearchWrap>
  );
};

Searchbar.prjpTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

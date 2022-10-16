import { Routes, Route } from 'react-router-dom';
import GlobalStyles from 'GlobalStyles';
import { Container, Header, Link } from './App.styled';
import Home from '../../Pages/Home';
import Movies from '../../Pages/Movies';
import MovieDetails from '../../Pages/MovieDetails';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </Container>
  );
};

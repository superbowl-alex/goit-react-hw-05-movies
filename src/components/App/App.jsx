import { Routes, Route } from 'react-router-dom';
import GlobalStyles from 'GlobalStyles';
import { Container, Header, Link } from './App.styled';

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
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
      <GlobalStyles />
    </Container>
  );
};

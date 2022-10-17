import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import GlobalStyles from 'GlobalStyles';

const SharedLayout = () => {
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
      <Outlet />
      <GlobalStyles />
    </Container>
  );
};
export default SharedLayout;

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ScrollUp from 'components/ScrollUp';
import {
  Container,
  InnerContainer,
  Header,
  Navigation,
  LogoLink,
  StyledLogo,
  HeaderList,
  StyledLink,
} from './SharedLayout.styled';
import GlobalStyles from 'GlobalStyles';
import Loader from 'components/Loader';
import Logo from '../../images/logo-film.png';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <LogoLink to="/">
            <StyledLogo src={Logo} alt="logo" />
            <span>Movie Time</span>
          </LogoLink>
          <HeaderList>
            <li>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </HeaderList>
        </Navigation>
      </Header>
      <InnerContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </InnerContainer>
      <ScrollUp />
      <GlobalStyles />
    </Container>
  );
};

export default SharedLayout;

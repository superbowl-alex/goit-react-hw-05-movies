import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  padding: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.secondaryBacground};
  color: ${p => p.theme.colors.primaryText};
  box-shadow: ${p => p.theme.shadows.middle};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  color: inherit;
  &:hover {
    color: ${p => p.theme.colors.primaryBacground};
  }
`;

export const StyledLogo = styled.img`
  width: 32px;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const StyledLink = styled(NavLink)`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.buttonColor};
  font-weight: ${p => p.theme.fontWeights.medium};

  &.active {
    color: ${p => p.theme.colors.secondaryText};
    background-color: ${p => p.theme.colors.primaryBacground};
  }
  &:hover {
    background-color: ${p => p.theme.colors.buttonHoverColor};
    box-shadow: ${p => p.theme.shadows.middle};
  }
`;

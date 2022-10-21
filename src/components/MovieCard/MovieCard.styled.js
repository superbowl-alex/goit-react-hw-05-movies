import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled.li`
  border-radius: ${p => p.theme.radii.large};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.middle};
  &:hover {
    transform: scale(1.02);
  }
`;

export const MovieRef = styled(NavLink)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > svg {
    width: 100%;
    object-fit: cover;
    fill: ${p => p.theme.colors.secondaryBacground};
  }
`;

export const MovieItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const MovieItemTitle = styled.div`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.secondaryText};
`;

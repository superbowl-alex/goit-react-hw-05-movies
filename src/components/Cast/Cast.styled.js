import styled from '@emotion/styled';

export const CastList = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${p => p.theme.space[4]}px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.div`
  border-radius: ${p => p.theme.radii.large};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.middle};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > svg {
    margin-top: 70px;
    width: 100%;
    object-fit: cover;
    fill: ${p => p.theme.colors.secondaryBacground};
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const CastImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CastTitle = styled.div`
  margin-top: auto;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondaryText};
`;

export const CharacterTitle = styled.div`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondaryText};
`;

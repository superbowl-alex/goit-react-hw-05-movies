import styled from '@emotion/styled';

export const TitleReviews = styled.h4`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.buttonColor};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const TextReviews = styled.h4`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const AlertReviews = styled.div`
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.l};
`;

import styled from '@emotion/styled';

export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.secondaryText};
`;

export const TitleDescription = styled.h2`
  color: ${p => p.theme.colors.buttonColor};
`;

export const SubTitleDescription = styled.h3`
  color: ${p => p.theme.colors.buttonColor};
`;

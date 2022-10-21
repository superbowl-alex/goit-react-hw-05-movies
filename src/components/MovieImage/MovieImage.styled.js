import styled from '@emotion/styled';

export const Image = styled.img`
  display: block;
  width: 300px;
  height: auto;
  margin-right: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.large};
  box-shadow: ${p => p.theme.shadows.middle};
`;

export const WrapSvg = styled.div`
  margin-right: ${p => p.theme.space[5]}px;

  > svg {
    fill: ${p => p.theme.colors.secondaryBacground};
  }
`;

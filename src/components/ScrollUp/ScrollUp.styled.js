import styled from '@emotion/styled';

export const ScrollUpWrap = styled.div`
  > button {
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.primaryBacground};
    border: ${p => p.theme.borders.wide};
    border-color: ${p => p.theme.colors.buttonColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button > svg {
    width: 30px;
    height: 30px;
    fill: ${p => p.theme.colors.buttonColor};
  }
`;

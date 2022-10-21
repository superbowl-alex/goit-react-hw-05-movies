import styled from '@emotion/styled';

export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.buttonColor};
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.l};
  cursor: pointer;
  outline: none;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.medium};
  border-color: ${p => p.theme.colors.secondaryBacground};

  &:hover {
    border-color: ${p => p.theme.colors.secondaryText};
    background-color: ${p => p.theme.colors.buttonHoverColor};
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  height: 48px;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.secondaryText};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.medium};
  border-color: ${p => p.theme.colors.secondaryBacground};
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  &:hover {
    border-color: ${p => p.theme.colors.secondaryText};
  }

  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.buttonColor};
  }
`;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: inline-block;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.buttonColor};
  font-weight: ${p => p.theme.fontWeights.medium};

  &:hover {
    background-color: ${p => p.theme.colors.buttonHoverColor};
    box-shadow: ${p => p.theme.shadows.middle};
  }
`;

export const WrapDescription = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

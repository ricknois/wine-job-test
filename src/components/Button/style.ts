import styled from 'styled-components';

import { theme } from '../../services/Theme/Theme';

export const Container = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.success};
  font-family: 'Lato';
  font-weight: 700;
  border-radius: 0.25rem;
  color: ${theme.colors.white};
`;

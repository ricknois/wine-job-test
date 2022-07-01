import styled from 'styled-components';

import { theme } from '../../../services/Theme/Theme';
import { MenuProps } from '../types';

export const Ul = styled.ul<MenuProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    font-family: 'Neo Sans';
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${theme.colors.white};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

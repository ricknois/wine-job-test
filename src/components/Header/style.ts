import styled from 'styled-components';

import { theme } from '../../services/Theme/Theme';

export const Container = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  height: 75px;
  padding-left: 1.172rem;
  padding-right: 1.172rem;
  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media (min-width: 1024px) {
    padding-left: 9.563rem;
    padding-right: 9.563rem;
  }
  @media (min-width: 1920px) {
    padding-left: 15.563rem;
    padding-right: 15.563rem;
  }
`;

export const MenuContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1.688rem;
  @media (min-width: 768px) {
    margin-left: 1.197rem;
  }
  @media (min-width: 1024px) {
    margin-left: 3.197rem;
  }
`;

export const Logo = styled.span``;
export const Search = styled.span``;
export const SimpleSearch = styled.span`
  margin-right: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const RoundedSearch = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Cart = styled.span``;

export const People = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Group1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

export const Group2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    width: 13rem;
  }
  @media (min-width: 1024px) {
  }
`;

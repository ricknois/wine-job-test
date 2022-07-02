import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    margin-right: 10%;
    margin-left: 10%;
  }
  @media (min-width: 1920px) {
    margin-right: 25%;
    margin-left: 25%;
  }
`;

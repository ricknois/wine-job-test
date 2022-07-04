import styled from 'styled-components';

import { theme } from '../../services/Theme/Theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  @media (min-width: 1024px) {
    width: 33%;
  }
`;

export const ContentContainer = styled.div`
  width: 9.75rem;
  height: 21.75rem;
  display: flex;
  background-color: ${theme.colors.white};
  flex-direction: column;
  align-items: center;
  border-radius: 0.25rem;

  @media (min-width: 768px) {
    width: 16rem;
    height: 20rem;
  }
`;

export const Logo = styled.img`
  width: 7.741rem;
  height: 11.335rem;
`;

export const Title = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.6rem;
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.194rem;
  }
`;
export const DiscountContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  font-family: 'Lato';
  font-size: 0.625rem;
  color: ${theme.colors.gray1};
  line-height: 0.75rem;
  text-decoration: line-through;
`;

export const Discount = styled.span`
  font-family: 'Lato';
  color: ${theme.colors.white};
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: ${theme.colors.orange};
  padding-left: 7px;
  padding-right: 7px;
  margin-left: 0.25rem;
`;

export const MemberContainer = styled.div`
  display: flex;
  margin-top: 0.625rem;
  align-items: center;
`;

export const PriceMember = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: 'Lato';
  font-weight: 700;
  color: ${theme.colors.branding};
  margin-left: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1.438rem;
  }
`;

export const MemberLabel = styled.span`
  font-family: 'Lato';
  font-size: 0.625rem;
  line-height: 1rem;
  color: ${theme.colors.gray1};
  @media (min-width: 768px) {
    font-size: 0.688rem;
    justify-content: space-between;
    color: ${theme.colors.black1};
    align-content: space-between;
    padding-left: 1px;
  }
`;

export const PriceNonMember = styled.span`
  font-family: 'Lato';
  font-size: 0.625rem;
  line-height: 1rem;
  color: ${theme.colors.gray1};
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ButtonContainer = styled.div`
  height: 2.5rem;
  width: 9.75rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    width: 16rem;
  }
`;

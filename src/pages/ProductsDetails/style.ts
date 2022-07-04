import styled from 'styled-components';

import { theme } from '../../services/Theme/Theme';

export const Container = styled.div`
  display: flex;
  margin-top: 4rem;
  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-right: 1rem;
  }
  @media (min-width: 1024px) {
    margin-left: 8rem;
    margin-right: 6rem;
  }
  @media (min-width: 1333px) {
    margin-left: 12rem;
    margin-right: 10rem;
  }
  @media (min-width: 1920px) {
    margin-left: 18rem;
    margin-right: 16rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-family: 'Neo Sans';
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 11.9rem;
  justify-content: space-around;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    align-self: flex-start;
    width: 22rem;
  }
`;

export const Stars = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const InfoLogo = styled.img`
  width: 1rem;
`;

export const Info = styled.span`
  font-family: 'Lato';
  font-size: 0.875rem;
  color: ${theme.colors.grayDark};
`;

export const MobileLogo = styled.img`
  width: 13.625rem;
  max-height: 20.813rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 23.813rem;
    height: 36.188rem;
  }
`;

export const DescriptionContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 6rem;
  @media (min-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const DescriptionTitle = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.grayDark};
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Description = styled.span`
  font-family: 'Lato';
  font-size: 1rem;
  color: ${theme.colors.gray2};
`;

export const PriceContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const MobilePriceContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  height: 5rem;
  width: 100%;
  background-color: ${theme.colors.white};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const PriceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  width: 50%;
  justify-content: space-between;
`;

export const Discount = styled.span`
  font-family: 'Lato';
  color: ${theme.colors.white};
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: ${theme.colors.orange};
  padding-left: 7px;
  padding-right: 7px;
  position: relative;
  width: fit-content;
  top: -0.6rem;
`;

export const Price = styled.span`
  font-family: 'Lato';
  font-size: 1rem;
  color: ${theme.colors.gray1};
  line-height: 0.75rem;
  text-decoration: line-through;
`;

export const PriceMember = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  color: ${theme.colors.branding};
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-weight: 900;
    font-size: 1.5rem;
  }
`;

export const PriceNonMember = styled.span`
  font-family: 'Lato';
  font-size: 0.625rem;
  line-height: 1rem;
  color: ${theme.colors.gray1};
  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  margin: 1rem 1rem 1rem 0rem;
  @media (min-width: 768px) {
    margin: 0;
    width: 20rem;
    max-height: 3.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
  }
`;

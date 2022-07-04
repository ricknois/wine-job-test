import ReactStars from 'react-rating-stars-component';
import { useLocation } from 'react-router-dom';

import { Header } from '../../components';
import Button from '../../components/Button/Button';
import { Item } from '../../services/api/interfaces';
import { formatPrice } from '../../services/formatter/formatter';
import { addItemToLocalStorage } from '../../services/localStorage/localStorage';
import {
  ButtonContainer,
  Container,
  ContentContainer,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  Discount,
  Info,
  InfoContainer,
  InfoLogo,
  Logo,
  MobileLogo,
  MobilePriceContainer,
  Price,
  PriceContainer,
  PriceInfoWrapper,
  PriceMember,
  PriceNonMember,
  Stars,
  Title,
} from './style';

export interface LocationParams {
  pathname: string;
  state: Item;
  search: string;
  hash: string;
  key: string;
}

export default function ProductsDetails() {
  const { state } = useLocation() as LocationParams;

  return (
    <>
      <Header />
      <Container>
        <Logo src={state.image} />
        <ContentContainer>
          <Title>{state.name}</Title>
          <InfoContainer>
            <InfoLogo src={state.flag} />
            <Info>{state.country}</Info>
            <Info>{state.type}</Info>
            <Info>{state.classification}</Info>
            <Info>{state.volume}</Info>
            <Stars>
              <ReactStars
                count={5}
                value={state.rating}
                size={14}
                activeColor="#ffd700"
              />
              <Info>{`(${state.avaliations})`}</Info>
            </Stars>
          </InfoContainer>
          <MobileLogo src={state.image} />
          <PriceContainer>
            <PriceMember>{`R$ ${formatPrice(state.priceMember)}`}</PriceMember>
            <PriceNonMember>{`PREÇO NÃO-SÓCIO R$ ${formatPrice(
              state.priceNonMember,
            )}`}</PriceNonMember>
          </PriceContainer>
          <DescriptionContainer>
            <DescriptionTitle>Descrição</DescriptionTitle>
            <Description>{state.sommelierComment}</Description>
          </DescriptionContainer>
          <ButtonContainer>
            <Button onPress={addItemToLocalStorage(state.name, state.price, state.id)} />
          </ButtonContainer>
        </ContentContainer>
        <MobilePriceContainer>
          <PriceInfoWrapper>
            <Discount>{`${state.discount}% OFF`}</Discount>
            <Price>{`R$ ${formatPrice(state.price)}`}</Price>
            <PriceMember>{`R$ ${formatPrice(state.priceMember)}`}</PriceMember>
            <PriceNonMember>{`PREÇO NÃO-SÓCIO R$ ${formatPrice(
              state.priceNonMember,
            )}`}</PriceNonMember>
          </PriceInfoWrapper>
          <ButtonContainer>
            <Button onPress={addItemToLocalStorage(state.name, state.price, state.id)} />
          </ButtonContainer>
        </MobilePriceContainer>
      </Container>
    </>
  );
}

import { Item } from '../../services/api/interfaces';
import { formatPrice } from '../../services/formatter/formatter';
import Button from '../Button/Button';
import {
  ButtonContainer,
  Container,
  ContentContainer,
  Discount,
  DiscountContainer,
  LabelContainer,
  Logo,
  MemberContainer,
  MemberLabel,
  Price,
  PriceMember,
  PriceNonMember,
  Title,
} from './style';

export default function Product({
  name,
  image,
  price,
  discount,
  priceMember,
  priceNonMember,
}: Item) {
  return (
    <Container>
      <ContentContainer>
        <Logo src={image} />
        <Title>{name}</Title>
        <DiscountContainer>
          <Price>{`R$ ${formatPrice(price)}`}</Price>
          <Discount>{`${discount}% OFF`}</Discount>
        </DiscountContainer>
        <MemberContainer>
          <LabelContainer>
            <MemberLabel>Sócio</MemberLabel>
            <MemberLabel>wine</MemberLabel>
          </LabelContainer>
          <PriceMember>{`R$ ${formatPrice(priceMember)}`}</PriceMember>
        </MemberContainer>
        <PriceNonMember>{`Não sócio R$ ${formatPrice(priceNonMember)}`}</PriceNonMember>
      </ContentContainer>
      <ButtonContainer>
        <Button />
      </ButtonContainer>
    </Container>
  );
}

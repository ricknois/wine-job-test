import CartSvg from '../../assets/CartSvg';
import IconSvg from '../../assets/IconSvg';
import PeopleSvg from '../../assets/PeopleSvg';
import RoundedSearchSvg from '../../assets/RoundedSearchSvg';
import SearchSvg from '../../assets/SearchSvg';
import Menu from '../Nav/Menu/Menu';
import {
  Cart,
  Container,
  Group1,
  Group2,
  Logo,
  MenuContainer,
  People,
  RoundedSearch,
  Search,
  SimpleSearch,
} from './style';

export default function Header() {
  return (
    <Container>
      <Group1>
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <Logo>
          <IconSvg />
        </Logo>
      </Group1>
      <Group2>
        <Search>
          <SimpleSearch>
            <SearchSvg />
          </SimpleSearch>
          <RoundedSearch>
            <RoundedSearchSvg />
          </RoundedSearch>
        </Search>
        <People>
          <PeopleSvg />
        </People>
        <Cart>
          <CartSvg />
        </Cart>
      </Group2>
    </Container>
  );
}

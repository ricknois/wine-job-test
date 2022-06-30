import { createGlobalStyle } from 'styled-components';

import Lato from './fonts/lato-v23-latin-regular.woff';
import Lato2 from './fonts/lato-v23-latin-regular.woff2';
import NeoSans from './fonts/NeoSans.woff';
import NeoSans2 from './fonts/NeoSans.woff2';
import Saira from './fonts/saira-v13-latin-regular.woff';
import Saira2 from './fonts/saira-v13-latin-regular.woff2';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Lato';
  src: url(${Lato2}) format('woff2'),
       url(${Lato}) format('woff');
}
@font-face {
  font-family: 'Saira';
  src: url(${Saira2}) format('woff2'),
       url(${Saira}) format('woff');
}
@font-face {
  font-family: 'Neo Sans';
  src: url(${NeoSans2}) format('woff2'),
       url(${NeoSans}) format('woff');
}
`;

export default FontStyles;

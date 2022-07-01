import { MenuProps } from '../types';
import { Ul } from './style';

export default function MenuContent({ open }: MenuProps) {
  return (
    <Ul open={open}>
      <li>Clube</li>
      <li>Loja</li>
      <li>Produtores</li>
      <li>Ofertas</li>
      <li>Eventos</li>
    </Ul>
  );
}

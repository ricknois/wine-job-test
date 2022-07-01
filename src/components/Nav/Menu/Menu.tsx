import { useState } from 'react';

import MenuContent from '../MenuContent/MenuContent';
import { Burger } from './style';

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <MenuContent open={open} />
    </>
  );
}

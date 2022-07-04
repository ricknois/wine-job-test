import React from 'react';

import { Container } from './style';

type Props = {
  onPress?: void;
};

export default function Button({ onPress }: Props) {
  return <Container onClick={() => onPress}>Adicionar</Container>;
}

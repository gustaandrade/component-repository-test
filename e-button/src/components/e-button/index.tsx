import React from 'react';

import { Container, Button } from './e-button.styles'

import { EButtonProps } from './types';

const EButton: React.FC<EButtonProps> = props => {
  return (
    <Container isPrimary={props.isPrimary}>
      <Button>
        {props.text ?? "MockText"}
      </Button>
    </Container>
  );
};

export default EButton;

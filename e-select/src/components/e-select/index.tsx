import React from 'react';

import { Container } from './e-select.styles';
import { ESelectProps } from './types';

import Select from 'react-select';

const ESelect: React.FC<ESelectProps> = props => {
  const mockOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Container>
      <Select 
        options={props.options ?? mockOptions}
        placeholder={props.placeholder ?? "MockPlaceholder"} 
      />
    </Container>
  );
}

export default ESelect;

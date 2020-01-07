import styled from 'styled-components';

import { EButtonProps } from './types';

export const Container = styled.div`
/* Adapt the colors based on primary prop */
background: ${(props: EButtonProps) => props.isPrimary ? "palevioletred" : "white"};
color: ${(props: EButtonProps) => props.isPrimary ? "white" : "palevioletred"};

width: ${(props: EButtonProps) => props.width ?? "400px"}
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

export const Button = styled.button`
width: 200px;
height: 50px;
`

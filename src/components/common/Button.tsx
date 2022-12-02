import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

interface Props {
  height: string;
  width: string;
  backgroundColor: string;
}
const Button = styled.button<Props>`
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
`;

export default Button;

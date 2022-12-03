import React from 'react';
import styled from 'styled-components';

interface Props {
  height: string;
  width: string;
  backgroundColor: string;
}
const Button = styled.button<Props>`
  cursor: pointer;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 15px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
`;

export default Button;

import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

interface Props {
  name: string;
  height: string;
  width: string;
  placeholder: string;
}
const InputContainer = styled.div`
  & p {
    fontsize: 15px;
    margin-bottom: 3px;
  }
`;

function Input({ name, height, width, placeholder }: Props) {
  const StyledInput = styled.input`
    font-size: 15px;
    border-radius: 10px;
    border: 2px solid ${palette.gray[2]};
    padding-left: 10px;
    outline: none;
    width: ${width};
    height: ${height};
  `;
  return (
    <InputContainer>
      <p>{name}</p>
      <StyledInput placeholder={placeholder} />
    </InputContainer>
  );
}

export default Input;

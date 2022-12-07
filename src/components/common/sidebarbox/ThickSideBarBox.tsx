import React from 'react';
import styled from 'styled-components';

const ThickSideBarBox = styled.div`
  position: absolute;
  top: 81px;
  left: 194px;
  width: calc(100% - 194px);
  height: calc(100% - 81px);
  justify-content: center;

  z-index: -1;
`;

export default ThickSideBarBox;

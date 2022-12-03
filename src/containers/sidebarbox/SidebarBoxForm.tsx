import React from 'react';
import styled from 'styled-components';
import ChatSideBarBox from '../../components/common/sidebarbox/ChatSideBarBox';
import SharpSideBarBox from '../../components/common/sidebarbox/SharpSideBarBox';
import ThickSideBarBox from '../../components/common/sidebarbox/ThickSideBarBox';

interface Props {
  type: string;
}

function SidebarBoxForm({ type }: Props) {
  switch (true) {
    case type === 'thick':
      return <ThickSideBarBox />;
    case type === 'sharp':
      return <SharpSideBarBox />;
    case type === 'chat':
      return <ChatSideBarBox />;
    default:
      break;
  }
}

export default SidebarBoxForm;

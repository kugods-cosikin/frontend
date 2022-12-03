import React from 'react';
import { useLocation } from 'react-router-dom';
import ChartSideBar from '../../components/common/sidebar/ChatSideBar';
import SharpSideBar from '../../components/common/sidebar/SharpSideBar';
import ThickSideBar from '../../components/common/sidebar/ThickSideBar';

function SidebarForm() {
  // if user: 아래로(페이지 확인), else : SidebarForm 없음

  // 페이지에 따라 알맞은 sidebar 랜더링
  const address = useLocation().pathname;
  switch (true) {
    case address === '/aboutus':
      return <ThickSideBar />;
    case address.endsWith('/profilelist'):
      return <ThickSideBar />;
    case address.endsWith('/myprofile'):
      return <ThickSideBar />;
    case address.endsWith('/chat'):
      return <ThickSideBar />;
    case address.endsWith('/setting'):
      return <ThickSideBar />;
    default:
      return null;
    // landing, login, register, setup
  }
}

export default SidebarForm;

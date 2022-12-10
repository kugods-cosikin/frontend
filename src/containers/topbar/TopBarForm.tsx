import React from 'react';
import { useLocation } from 'react-router-dom';
import RegularTopBar from '../../components/common/topbar/RegularTopBar';

function TopBarForm() {
  // 페이지에 따라 알맞은 topbar 랜더링
  const address = useLocation().pathname;
  switch (true) {
    case address.endsWith('/login'):
      return null;
    case address.endsWith('/register'):
      return null;
    default:
      return <RegularTopBar />;
  }
}

export default TopBarForm;

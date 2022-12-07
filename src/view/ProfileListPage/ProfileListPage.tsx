import React from 'react';
import styled from 'styled-components';
import ThickSideBarBox from '../../components/common/sidebarbox/ThickSideBarBox';
import ProfileListForm from '../../containers/profile/ProfileListForm';

const ProfileListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 120px auto;
  width: 964px;
`;

function ProfileListPage() {
  return (
    <ThickSideBarBox>
      <ProfileListContainer>
        <ProfileListForm />
        <ProfileListForm />
        <ProfileListForm />
        <ProfileListForm />
      </ProfileListContainer>
    </ThickSideBarBox>
  );
}

export default ProfileListPage;

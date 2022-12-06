import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const ProfileContainer = styled.div`
  width: 457px;
  height: 222px;

  background: ${palette.gray[5]};
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

function ProfileForm() {
  return (
    <ProfileContainer>
      <div>
        <div>photo</div>
        <div>
          <div>
            <Button height="32px" width="76px" backgroundColor={palette.purple[1]} />
          </div>
          <div />
        </div>
      </div>
      <div>b</div>
    </ProfileContainer>
  );
}

export default ProfileForm;

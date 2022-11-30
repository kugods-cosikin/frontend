/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Input from '../common/Input';
import LogoTitle from '../common/LogoTitle';
import Photo from '../common/Photo';
import Toggle from '../common/Toggle/Toggle';

const FullScreen = styled.div`
  height: 100vh;
  width: 100%;
`;
const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const Content1 = styled.div`
  padding: 20px;
  background-color: ${palette.purple[2]};
`;
const Content2 = styled.div`
  padding: 20px;
`;
const PhotoDiv = styled.div`
  //phtoDiv
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 457px;
`;

function PersonalSettingForm() {
  const [isHost, setIsHost] = useState(false);
  const handleCallback = (isChecked: boolean) => {
    setIsHost(isChecked);
  };
  return (
    <FullScreen>
      <Wrapped>
        <LogoTitle title="Personal Info Settings" />

        <ContentBox>
          <PhotoDiv>
            <Photo />
          </PhotoDiv>

          <Content1>
            <NameDiv>
              <Input name="First Name" height="49px" width="223px" placeholder="Enter your first name" />
              <Input name="Second Name" height="49px" width="223px" placeholder="Enter your second name" />
            </NameDiv>
            <Input name="Username" height="49px" width="457px" placeholder="Enter your username" />
            <Input name="Bio" height="201px" width="457px" placeholder="Tell us more about you" />
          </Content1>

          <Content2>
            <p>Being Host</p>
            <Toggle parentCallback={handleCallback} />
            <Input name="Github repository" height="49px" width="282px" placeholder="Enter your Github repository" />
            <Input name="Stacks" height="201px" width="282px" placeholder="Note your stacks by #Hashtags" />
          </Content2>
        </ContentBox>
      </Wrapped>
    </FullScreen>
  );
}

export default PersonalSettingForm;

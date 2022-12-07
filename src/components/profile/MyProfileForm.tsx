import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Photo from '../common/Photo';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  height: calc(100% - 100px);
  padding-top: 100px;
  position: absolute;
`;
const PhotoDiv = styled.div``;
const OneLineDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
`;
const BoxContainer = styled.div`
  display: flex;
`;
const LeftBox = styled.div`
  width: 324px;
  height: 195px;
  background: ${palette.gray[5]};
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 55px;

  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightBox = styled.div`
  width: 384px;
  height: 255px;
  background: ${palette.gray[5]};
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const StyledInput = styled.input`
  font-size: 17px;
  border: none;
  border-bottom: 2px solid ${palette.purple[1]};
  padding-left: 10px;
  width: 320px;
  outline: none;
`;
const ContentInputConatiner = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  width: 323px;
  height: 40px;
`;
const ContentName = styled.div`
  margin-left: 10px;
  width: 67px;
  height: 38px;
  align-items: center;
  & p {
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: 700;
  }
`;
const ContentInput = styled.p`
  font-size: 15px;
  height: 33px;
  width: 240px;
  border: none;
  padding-left: 10px;
  outline: none;
  text-align: center;
  margin: 10px 0 0 0;
`;

function MyProfileForm() {
  const [isButtonOn, setIsButtonOn] = useState(false);
  const handlePhotoCallback = () => {
    console.log('ㅎ');
  };

  return (
    <WholeContainer>
      <form>
        <PhotoDiv>
          <Photo parentCallback={handlePhotoCallback} isButtonOn={isButtonOn} />
        </PhotoDiv>
        <OneLineDiv>
          <h1 style={{ textAlign: 'center', fontSize: '17px' }}>한줄소개</h1>
          <StyledInput placeholder="한줄소개" />
        </OneLineDiv>
        <BoxContainer>
          <LeftBox>
            <ContentInputConatiner>
              <ContentName>
                <p>이름</p>
              </ContentName>
              <ContentInput>일이삼사오육칠팔구십일이삼사오</ContentInput>
            </ContentInputConatiner>
            <ContentInputConatiner>
              <ContentName>
                <p>닉네임</p>
              </ContentName>
              <ContentInput />
            </ContentInputConatiner>
            <ContentInputConatiner>
              <ContentName>
                <p>이메일</p>
              </ContentName>
              <ContentInput />
            </ContentInputConatiner>
            <ContentInputConatiner>
              <ContentName>
                <p>한줄소개</p>
              </ContentName>
              <ContentInput />
            </ContentInputConatiner>
          </LeftBox>
          <RightBox />
        </BoxContainer>
      </form>
    </WholeContainer>
  );
}

export default MyProfileForm;

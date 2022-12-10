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
const TopBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 40px 0;
`;
const PhotoDiv = styled.div`
  align-items: left;
  flex-direction: row;
  height: 120px;
  width: 120px;
`;
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
`;
const UserTypeDiv = styled.div`
  border: 3px solid ${palette.purple[1]};
  width: 70px;
  height: 33px;
  border-radius: 10px;
  & p {
    margin: 5px;
    text-align: center;
    font-weight: 700;
  }
`;
const UserNameDiv = styled.div`
  margin: 0px;
  height: 40px;
  & p {
    font-size: 40px;
    font-weight: 700;
    margin: 0;
  }
`;
const UserMailDiv = styled.div`
  margin: 15px 0 0 0;
  & p {
    font-weight: lighter;
    margin: 0 0 0 0;
  }
`;
const OneLineDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 10px;
  margin-bottom: 45px;
  margin: 0 15 15px;
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftUpperBox = styled.div`
  width: 370px;
  height: 100px;
  background: ${palette.gray[5]};
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 55px;
  padding-left: 15px;
  padding: 20px 30px 20px 30px;
`;
const LeftLowerBox = styled.div`
  width: 370px;
  height: 180px;
  margin-top: 25px;
  background: ${palette.gray[5]};
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 55px;

  padding: 30px;
`;
const LeftBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 320px;
  outline: none;
`;
const ContentInputContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  width: 323px;
  height: 40px;
  margin: 15px;
`;
const ContentName = styled.div`
  margin-left: 10px;
  width: 67px;
  height: 38px;
  align-items: left;
  & p {
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: 700;
  }
`;
const ContentInput = styled.p`
  font-size: 15px;
  height: 20px;
  width: 240px;
  border: none;
  padding-left: 10px;
  outline: none;
  text-align: left;
  margin: 10px 0 0 0;
  border-left: 2px solid black;
`;

function MyProfileForm() {
  const [isButtonOn, setIsButtonOn] = useState(false);
  const handlePhotoCallback = () => {
    console.log('ㅎ');
  };

  return (
    <WholeContainer>
      <form>
        <TopBoxContainer>
          <PhotoDiv>
            <Photo parentCallback={handlePhotoCallback} isButtonOn={isButtonOn} />
          </PhotoDiv>
          <UserContainer>
            <UserTypeDiv>
              <p>호스트</p>
            </UserTypeDiv>
            <UserNameDiv>
              <p>Username</p>
            </UserNameDiv>
            <UserMailDiv>
              <p>example@email.com</p>
            </UserMailDiv>
          </UserContainer>
        </TopBoxContainer>
        <BoxContainer>
          <LeftBoxContainer>
            <LeftUpperBox>
              <OneLineDiv>
                <h1 style={{ textAlign: 'left', fontSize: '17px' }}>한줄소개</h1>
                <StyledInput placeholder="한줄소개" />
              </OneLineDiv>
            </LeftUpperBox>
            <LeftLowerBox>
              <ContentInputContainer>
                <ContentName>
                  <p>이름</p>
                </ContentName>
                <ContentInput>일이삼사오육칠팔구십일이삼사오</ContentInput>
              </ContentInputContainer>
              <ContentInputContainer>
                <ContentName>
                  <p>닉네임</p>
                </ContentName>
                <ContentInput />
              </ContentInputContainer>
              <ContentInputContainer>
                <ContentName>
                  <p>이메일</p>
                </ContentName>
                <ContentInput />
              </ContentInputContainer>
            </LeftLowerBox>
          </LeftBoxContainer>
          <RightBox />
        </BoxContainer>
      </form>
    </WholeContainer>
  );
}

export default MyProfileForm;

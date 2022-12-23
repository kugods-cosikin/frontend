import React, { useState } from 'react';
import styled from 'styled-components';
import { readProfile } from '../../lib/api/profiles';
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
  width: 400px;
  height: 405px;
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
  margin: 15px 15px 15px 0px;
  padding-left: 15px;
`;
const StackContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  width: 323px;
  height: 235px;
  margin: 15px 15px 15px 0px;
  padding-left: 15px;
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
const ContentInput = styled.input`
  font-size: 15px;
  height: 20px;
  width: 240px;
  border: none;
  padding-left: 10px;
  outline: none;
  text-align: left;
  margin: 10px 0 0 0;
  border-left: 2px solid ${palette.gray[3]};
`;
const ContentP = styled.p`
  font-size: 15px;
  height: 20px;
  width: 240px;
  border: none;
  padding-left: 10px;
  outline: none;
  text-align: left;
  margin: 10px 0 0 0;
  border-left: 2px solid ${palette.gray[3]};
`;
const PDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledTextArea = styled.textarea`
  font-size: 15px;
  border: 0px;
  border-left: 2px solid ${palette.gray[3]};
  padding-left: 10px;
  outline: none;
  resize: none;
  height: 210px;
  width: 220px;
  margin-top: 10px;
`;
const RightContent = styled.div`
  margin: 15px 25px;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 17px;
  width: 150px;
  height: 49px;
  background-color: ${palette.purple[1]};
`;

function MyProfileForm() {
  // Photo component에 필요한 params
  const [isButtonOn, setIsButtonOn] = useState(false);
  const handlePhotoCallback = () => {
    console.log('ㅎ');
  };

  // 버튼 상태관리, 수정 -> 제출로 변경
  const [isModify, setIsModify] = useState(false);

  const [inputContents, setInputContents] = useState({
    bio: '',
    nickname: '',
    github: '',
    stack: '',
  });

  // const data = readProfile;
  // UserTypeDiv => {data.isHost ? '호스트' : '게스트'}
  // UserNameDiv => {data.username}
  // UserMailDiv => {data.email}
  // OnelineDiv > h1 => {data.bio}
  // LeftLowerBox > ContentInput => {data.name}, {data.username}, {data.email}
  // RighBox > ContentInput => {data.github ? data.github : null}
  // RighBox > ContentInput => {data.stack ? data.stack : null}
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
                <ContentP>얘는 정해진 값!</ContentP>
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
                <ContentP>얘는 정해진 값!</ContentP>
              </ContentInputContainer>
            </LeftLowerBox>
          </LeftBoxContainer>
          <RightBox>
            <RightContent>
              <PDiv>
                <h1 style={{ textAlign: 'left', fontSize: '17px' }}>호스트 정보</h1>
                <p>
                  <a href="/host_what?">호스트가 뭔가요?</a>
                </p>
              </PDiv>
              <ContentInputContainer>
                <ContentName>
                  <p>깃허브</p>
                </ContentName>
                <ContentInput />
              </ContentInputContainer>
              <StackContainer>
                <ContentName>
                  <p>스택</p>
                </ContentName>
                <StyledTextArea name="stack" placeholder="" maxLength={100} />
              </StackContainer>
            </RightContent>
          </RightBox>
        </BoxContainer>
        <ButtonDiv>
          <Button>{!isModify ? '수정' : '제출'}</Button>
        </ButtonDiv>
      </form>
    </WholeContainer>
  );
}

export default MyProfileForm;

/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import profile from '../common/images/icon_profile.png';

const ClickedDiv = styled.div`
  cursor: pointer;
`;
const ProfileContainer = styled.div`
  position: relative;
  width: 460px;
  height: 196px;
  padding-top: 20px;

  background: ${palette.gray[5]};
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 50px;
`;
const UpperBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 26px 20px 20px;
`;
const LowerBox = styled.div`
  margin: 0 26px 20px 115px;
  display: flex;
  justify-content: space-between;
`;
const PhotoDiv = styled.div``;
const SimpleIntro = styled.div`
  & p {
    max-width: 312px;
    word-wrap: break-word;
    margin: 0;
  }
`;
const ButtonWithH = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  & h1 {
    font-size: 20px;
    margin: 0px;
  }
`;
const IconBox = styled.div`
  display: flex;
  margin-top: 7px;

  & img {
    height: 25px;
    width: 25px;
  }
  & p {
    margin: 5px 0;
    vertical-align: middle;
  }
`;
interface Props {
  img: string;
  nickname: string;
  bio: string;
  chat_number: number;
  res_average: number;
  like: number;
}
function ProfileForm({ img, nickname, bio, chat_number, res_average, like }: Props) {
  // const {img, nickname, bio, chat_number, res_average, like} = user
  // 어떤 정보 불러올 지 논의
  // 사진(없으면 기본 이미지 db나 주소로 가져오나?)/닉네임/한줄소개(최대 글자수 제한)/채팅개수/평균응답/좋아요수
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target, '버튼');
  };
  const onProfileClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <ProfileContainer>
      <UpperBox>
        <PhotoDiv>
          <img
            src={profile}
            alt="profileImg"
            style={{
              width: '80px',
              height: '80px',
              border: `1px solid ${palette.gray[3]}`,
              borderRadius: '50px',
              marginRight: '20px',
            }}
          />
        </PhotoDiv>
        <SimpleIntro>
          <ButtonWithH>
            <h1>Nickname</h1>
            <Button
              onClick={onButtonClick}
              height="32px"
              width="76px"
              backgroundColor={palette.purple[1]}
              style={{ borderRadius: '3px' }}
            >
              Chat
            </Button>
          </ButtonWithH>
          <p>
            Hello, my name is Harry, feel free to ask me. I’m usually available at night. Thanks for your attention.
          </p>
        </SimpleIntro>
      </UpperBox>

      <hr />

      <LowerBox>
        <IconBox>
          <img src={profile} alt="chat" />
          <p>{chat_number}</p>
        </IconBox>
        <IconBox>
          <img src={profile} alt="res" />
          <p>{res_average}min</p>
        </IconBox>
        <IconBox>
          <img src={profile} alt="like" />
          <p>{like}</p>
        </IconBox>
      </LowerBox>
    </ProfileContainer>
  );
}

export default ProfileForm;

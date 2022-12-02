/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { guestSetup, hostSetup } from '../../lib/api/setup';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Photo from '../common/Photo';
import Toggle from '../common/Toggle/Toggle';

const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  min-width: max-content;
  width: 900px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.div``;
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
  height: 504px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${palette.gray[3]};
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 20px;
`;
const Content2 = styled.div`
  height: 504px;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${palette.gray[3]};
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const PDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const PhotoDiv = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const InputContainer = styled.div`
  & p {
    fontsize: 15px;
    margin-bottom: 3px;
  }
  .disabled {
    border-color: ${palette.gray[3]};
    color: ${palette.gray[2]};
  }
`;
const StyledInput = styled.input`
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid ${palette.gray[2]};
  padding-left: 10px;
  outline: none;
`;
const StyledTextArea = styled.textarea`
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid ${palette.gray[2]};
  padding-left: 10px;
  outline: none;
  resize: none;
  &::placeholder {
    font-size: 15px;
  }
`;
const Star = styled.span`
  font-size: 15px;
  color: ${palette.red[0]};
  padding-left: 3px;
`;

interface Image {
  image: File | null | undefined;
}

function PersonalSettingForm() {
  // Photo로부터 image 가져오기(시작)
  const [image, setImage] = useState<Image>({
    image: null,
  });

  const handlePhotoCallback = (image: File | null | undefined) => {
    setImage({
      image,
    });
  };
  // Photo로부터 image 가져오기(끝)

  // Toggle로부터 state 가져오기(시작)
  const handleToggleCallback = (isChecked: boolean) => {
    setIsHost(isChecked);
  };

  const [isHost, setIsHost] = useState(false);
  // Toggle로부터 state 가져오기(끝)

  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    bio: '',
    type: 'guest',
    github: '',
    stack: '',
  });
  const { name, username, bio, type, github, stack } = inputs;

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleOnTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const validateInputs = (name: string, username: string, bio: string, type: string, github: string, stack: string) => {
    if (isHost === true) {
      // 호스트일 때
      const hostArray = [name, username, bio, type, github, stack];
      if (hostArray.includes('')) {
        console.log('Host setup 실패');
      } else {
        console.log('Host setup 성공');
        console.log(image, name, username, bio, type, github, stack);
        // hostSetup({ image, name, username, bio, type, github, stack });
      }
    } else {
      // 게스트일 때
      const guestArray = [name, username, bio, type];
      if (guestArray.includes('')) {
        console.log('guest setup 실패');
      } else {
        console.log('guest setup 성공');
        console.log(image, name, username, bio, type);
        // hostSetup({ image, name, username, bio, type });
      }
    }
  };
  const deleteOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('delete');
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateInputs(name, username, bio, type, github, stack);
  };

  useEffect(() => {
    if (isHost) {
      setInputs({ ...inputs, type: 'host' });
    } else {
      setInputs({ ...inputs, type: 'guest', github: '', stack: '' });
    }
  }, [isHost]);

  return (
    <Wrapped>
      <Title>
        <h1>Personal Info Settings</h1>
      </Title>
      <form onSubmit={handleOnSubmit}>
        <ContentBox>
          <PhotoDiv>
            <Photo parentCallback={handlePhotoCallback} />
            <Button
              type="button"
              onClick={deleteOnClick}
              width="90px"
              height="26px"
              backgroundColor={palette.purple[1]}
              style={{ marginTop: '20px', marginLeft: '5px', zIndex: '3' }}
            >
              삭제
            </Button>
          </PhotoDiv>

          <Content1>
            <InputContainer>
              <p>
                이름<Star>*</Star>
              </p>
              <StyledInput
                name="name"
                onChange={handleOnInputChange}
                placeholder="이름을 입력해 주세요"
                style={{ height: '49px', width: '420px' }}
                value={name}
              />
            </InputContainer>

            <InputContainer>
              <p>
                사용자 이름<Star>*</Star>
              </p>
              <StyledInput
                name="username"
                onChange={handleOnInputChange}
                placeholder="사용자 이름을 입력해 주세요"
                style={{ height: '49px', width: '420px' }}
                value={username}
              />
            </InputContainer>
            <InputContainer>
              <p>
                한 줄 소개<Star>*</Star>
              </p>
              <StyledTextArea
                name="bio"
                onChange={handleOnTextAreaChange}
                placeholder="한 줄 소개를 입력해 주세요"
                style={{ height: '250px', width: '420px' }}
                value={bio}
              />
            </InputContainer>
          </Content1>

          <Content2>
            <div>
              <PDiv>
                <p>호스트 되기</p>
                <p>
                  <a href="/host_what?">호스트가 뭔가요?</a>
                </p>
              </PDiv>
              <Toggle parentCallback={handleToggleCallback} />
            </div>
            <InputContainer>
              <p className={!isHost ? 'disabled' : 'abled'}>깃허브 프로필{isHost && <Star>*</Star>}</p>
              <StyledInput
                className={!isHost ? 'disabled' : 'abled'}
                name="github"
                onChange={handleOnInputChange}
                placeholder="깃허브 프로필을 입력해 주세요"
                style={{ height: '49px', width: '380px' }}
                value={github}
                disabled={!isHost}
              />
            </InputContainer>
            <InputContainer>
              <p className={!isHost ? 'disabled' : 'abled'}>스택{isHost && <Star>*</Star>}</p>
              <StyledTextArea
                className={!isHost ? 'disabled' : 'abled'}
                name="stack"
                onChange={handleOnTextAreaChange}
                placeholder="#해시태그를 이용해 스택을 입력해 주세요"
                style={{ height: '250px', width: '380px' }}
                value={stack}
                disabled={!isHost}
              />
            </InputContainer>
          </Content2>
        </ContentBox>

        <ButtonDiv>
          <Button width="150px" height="49px" backgroundColor={palette.purple[1]}>
            프로필 설정
          </Button>
        </ButtonDiv>
      </form>
    </Wrapped>
  );
}

export default PersonalSettingForm;

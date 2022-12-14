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
  margin-bottom: 15px;
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
    font-size: 15px;
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
  image: File | null;
}

function PersonalSettingForm() {
  const [isButtonOn, setIsButtonOn] = useState(false);
  // Photo????????? image ????????????(??????)
  const [image, setImage] = useState<Image>({
    image: null,
  });

  const handlePhotoCallback = (image: File | null) => {
    setImage({
      image,
    });
  };
  // Photo????????? image ????????????(???)

  useEffect(() => {
    // photo?????? ????????? image ?????? ?????? ??????/????????????
    if (image.image) {
      setIsButtonOn(true);
    } else {
      setIsButtonOn(false);
    }
    console.log(image);
  }, [image]);

  // Toggle????????? state ????????????(??????)
  const handleToggleCallback = (isChecked: boolean) => {
    setIsHost(isChecked);
  };

  const [isHost, setIsHost] = useState(false);
  // Toggle????????? state ????????????(???)

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
      // ???????????? ???
      const hostArray = [name, username, bio, type, github, stack];
      if (hostArray.includes('')) {
        console.log('Host setup ??????');
      } else {
        console.log('Host setup ??????');
        console.log(image, name, username, bio, type, github, stack);
        // hostSetup({ image, name, username, bio, type, github, stack });
      }
    } else {
      // ???????????? ???
      const guestArray = [name, username, bio, type];
      if (guestArray.includes('')) {
        console.log('guest setup ??????');
      } else {
        console.log('guest setup ??????');
        console.log(image, name, username, bio, type);
        // hostSetup({ image, name, username, bio, type });
      }
    }
  };
  const deleteOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setImage({ image: null });
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
        <h1>???????????? ??????</h1>
      </Title>
      <form onSubmit={handleOnSubmit}>
        <ContentBox>
          <PhotoDiv>
            <Photo parentCallback={handlePhotoCallback} isButtonOn={isButtonOn} />
            <Button
              type="button"
              onClick={isButtonOn ? deleteOnClick : undefined}
              width="90px"
              height="26px"
              backgroundColor={isButtonOn ? palette.purple[1] : palette.gray[3]}
              style={{ marginTop: '20px', zIndex: '3' }}
            >
              ??????
            </Button>
          </PhotoDiv>

          <Content1>
            <InputContainer>
              <p>
                ??????<Star>*</Star>
              </p>
              <StyledInput
                name="name"
                onChange={handleOnInputChange}
                placeholder="????????? ????????? ?????????"
                style={{ height: '49px', width: '420px' }}
                value={name}
                maxLength={10}
              />
            </InputContainer>

            <InputContainer>
              <p>
                ?????????<Star>*</Star>
              </p>
              <StyledInput
                name="username"
                onChange={handleOnInputChange}
                placeholder="???????????? ????????? ?????????"
                style={{ height: '49px', width: '420px' }}
                value={username}
                maxLength={14}
              />
            </InputContainer>
            <InputContainer>
              <p>
                ??? ??? ??????<Star>*</Star>
              </p>
              <StyledTextArea
                name="bio"
                onChange={handleOnTextAreaChange}
                placeholder="??? ??? ????????? ????????? ????????? (?????? 100???)"
                style={{ height: '250px', width: '420px' }}
                value={bio}
                maxLength={100}
              />
            </InputContainer>
          </Content1>

          <Content2>
            <div>
              <PDiv>
                <p>????????? ??????</p>
                <p>
                  <a href="/host_what?">???????????? ??????????</a>
                </p>
              </PDiv>
              <Toggle parentCallback={handleToggleCallback} />
            </div>
            <InputContainer>
              <p className={!isHost ? 'disabled' : 'abled'}>????????? ?????????{isHost && <Star>*</Star>}</p>
              <StyledInput
                className={!isHost ? 'disabled' : 'abled'}
                name="github"
                onChange={handleOnInputChange}
                placeholder="????????? ???????????? ????????? ?????????"
                style={{ height: '49px', width: '380px' }}
                value={github}
                disabled={!isHost}
                maxLength={20}
              />
            </InputContainer>
            <InputContainer>
              <p className={!isHost ? 'disabled' : 'abled'}>??????{isHost && <Star>*</Star>}</p>
              <StyledTextArea
                className={!isHost ? 'disabled' : 'abled'}
                name="stack"
                onChange={handleOnTextAreaChange}
                placeholder="#??????????????? ????????? ????????? ????????? ?????????          ex) #React #Node #C++"
                style={{ height: '250px', width: '380px' }}
                value={stack}
                disabled={!isHost}
                maxLength={100}
              />
            </InputContainer>
          </Content2>
        </ContentBox>

        <ButtonDiv>
          <Button width="150px" height="49px" backgroundColor={palette.purple[1]}>
            ????????? ??????
          </Button>
        </ButtonDiv>
      </form>
    </Wrapped>
  );
}

export default PersonalSettingForm;

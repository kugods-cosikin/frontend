/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { setup } from '../../lib/api/setup';
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
  width: 499px;
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
  width: 345px;
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
const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 470px;
  justify-content: space-between;
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
`;
const StyledInput = styled.input`
  font-size: 15px;
  border-radius: 10px;
  border: 2px solid ${palette.gray[2]};
  padding-left: 10px;
  outline: none;
  & + disabled {
    border: 2px solid ${palette.gray[3]};
  }
`;
const Star = styled.span`
  font-size: 15px;
  color: ${palette.red[0]};
  padding-left: 3px;
`;

function PersonalSettingForm() {
  const [isHost, setIsHost] = useState(false);
  const handleCallback = (isChecked: boolean) => {
    setIsHost(isChecked);
  };
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    username: '',
    bio: '',
    type: 'guest',
    github: '',
    stack: '',
  });
  const { firstName, lastName, username, bio, type, github, stack } = inputs;

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const updateOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const deleteOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            <Photo />
            <Button
              type="button"
              onClick={updateOnClick}
              width="82px"
              height="26px"
              backgroundColor={palette.purple[1]}
            >
              Update
            </Button>
            <Button type="button" onClick={deleteOnClick} width="82px" height="26px" backgroundColor={palette.gray[2]}>
              Delete
            </Button>
          </PhotoDiv>

          <Content1>
            <NameDiv>
              <InputContainer>
                <p>
                  First Name<Star>*</Star>
                </p>
                <StyledInput
                  name="firstName"
                  onChange={handleOnInputChange}
                  placeholder="Enter your first name"
                  style={{ height: '49px', width: '210px' }}
                  value={firstName}
                />
              </InputContainer>
              <InputContainer>
                <p>
                  Second Name<Star>*</Star>
                </p>
                <StyledInput
                  name="lastName"
                  onChange={handleOnInputChange}
                  placeholder="Enter your second name"
                  style={{ height: '49px', width: '210px' }}
                  value={lastName}
                />
              </InputContainer>
            </NameDiv>
            <InputContainer>
              <p>
                Username<Star>*</Star>
              </p>
              <StyledInput
                name="username"
                onChange={handleOnInputChange}
                placeholder="Enter your username"
                style={{ height: '49px', width: '457px' }}
                value={username}
              />
            </InputContainer>
            <InputContainer>
              <p>
                Bio<Star>*</Star>
              </p>
              <StyledInput
                name="bio"
                onChange={handleOnInputChange}
                placeholder="Tell us more about you"
                style={{ height: '250px', width: '457px' }}
                value={bio}
              />
            </InputContainer>
          </Content1>

          <Content2>
            <PDiv>
              <p>Being a Host</p>
              <p>
                <a href="/host_what?">What is a host?</a>
              </p>
            </PDiv>
            <Toggle parentCallback={handleCallback} />
            <InputContainer>
              <p className={inputs.type}>Github repository{isHost && <Star>*</Star>}</p>
              <StyledInput
                className={isHost ? 'disabled' : 'abled'}
                name="github"
                onChange={handleOnInputChange}
                placeholder="Enter your Github repository"
                style={{ height: '49px', width: '282px' }}
                value={github}
                disabled={!isHost}
              />
            </InputContainer>
            <InputContainer>
              <p className={inputs.type}>Stacks{isHost && <Star>*</Star>}</p>
              <StyledInput
                className={isHost ? 'disabled' : 'abled'}
                name="stack"
                onChange={handleOnInputChange}
                placeholder="Note your stacks by #Hashtags"
                style={{ height: '250px', width: '282px' }}
                value={stack}
                disabled={!isHost}
              />
            </InputContainer>
          </Content2>
        </ContentBox>

        <ButtonDiv>
          <Button width="150px" height="49px" backgroundColor={palette.purple[1]}>
            Sign up
          </Button>
        </ButtonDiv>
      </form>
    </Wrapped>
  );
}

export default PersonalSettingForm;

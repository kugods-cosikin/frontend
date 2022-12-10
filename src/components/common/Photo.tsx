/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import profile from './images/icon_profile.png';
import camera from './images/icon_camera.png';

const Container = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  margin: 0 auto;
`;

const Camera = styled.img`
  z-index: 2;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  top: -160px;
  left: 80px;
`;
const StyledFile = styled.input`
  z-index: 0;
  height: 110px;
  width: 110px;
  border-radius: 50%;
  border: 0px solid ${palette.gray[4]};
  cursor: pointer;
  font-size: 0;
  position: relative;
  top: -136px;
  left: 4px;

  &::file-selector-button {
    display: none;
  }
`;
const PhotoDiv = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${palette.gray[3]};
  position: relative;
`;

interface Props {
  parentCallback: (image: File | null) => void;
  isButtonOn: boolean;
}

function Photo({ parentCallback, isButtonOn }: Props) {
  // 전달할 file을 위한 state
  const [image, setImage] = useState<File | null>(null);

  // 미리보기를 위한 src
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>('');

  useEffect(() => {
    parentCallback(image);
  }, [image]);

  useEffect(() => {
    if (!isButtonOn) {
      setImage(null);
      setImageSrc(null);
    }
  }, [isButtonOn]);

  const encodeFileToBase64 = (fileBlob: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];

    if (files && files.type.substring(0, 5) === 'image') {
      setImage(files);
      encodeFileToBase64(files);
    }
    e.currentTarget.value = '';
  };

  return (
    <Container>
      <PhotoDiv src={imageSrc || profile} alt="" />
      <StyledFile id="input" type="file" accept="/image/*" onChange={onChange} />
      <Camera src={camera} alt="" />
    </Container>
  );
}

export default Photo;

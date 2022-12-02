/* eslint-disable no-alert */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import profile from './images/icon_profile.png';
import camera from './images/icon_camera.png';

const Container = styled.div`
  width: 100px;
  height: 100px;
  z-index: 0;
  position: relative;
`;

const Camera = styled.img`
  z-index: 1;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  top: -150px;
  left: 75px;
`;
const StyledFile = styled.input`
  z-index: 1;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 0.5px solid ${palette.gray[4]};
  cursor: pointer;
  font-size: 0;
  position: relative;
  top: -127px;
  left: 4px;

  &::file-selector-button {
    display: none;
`;
const PhotoDiv = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${palette.gray[3]};
  position: relative;
`;

interface Props {
  parentCallback: (image: File | null | undefined) => void;
}

function Photo({ parentCallback }: Props) {
  // 전달할 file을 위한 state
  const [image, setImage] = useState<File | null>(null);

  // 미리보기를 위한 src
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>('');

  useEffect(() => {
    parentCallback(image);
  }, [image]);

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
    } else {
      setImage(null);
    }
  };
  return (
    <Container>
      <PhotoDiv src={imageSrc || profile} alt="" />
      <StyledFile type="file" accept="/image/*" onChange={onChange} />
      <Camera src={camera} alt="" />
    </Container>
  );
}

export default Photo;

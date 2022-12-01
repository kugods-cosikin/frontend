/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import './toggle.css';

interface Props {
  parentCallback: (isChecked: boolean) => void;
}

export default function Toggle({ parentCallback }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked((p) => !p);
  };
  useEffect(() => {
    parentCallback(isChecked);
  });
  return (
    <label className="switch">
      <input type="checkbox" onChange={handleOnChange} checked={isChecked} />
      <div className="slider" />
    </label>
  );
}

import React from 'react';
import HostSettingForm from '../../components/setup/HostSettingForm';
import PersonalSettingForm from '../../components/setup/PersonalSettingForm';

function SetupForm() {
  return (
    <>
      <PersonalSettingForm />
      <HostSettingForm />
    </>
  );
}

export default SetupForm;

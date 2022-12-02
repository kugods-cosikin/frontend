/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import explore from './images/icon_sidebar_explore.png';
import profile from './images/icon_sidebar_profile.png';
import chat from './images/icon_sidebar_chat.png';
import setting from './images/icon_sidebar_setting.png';
import logout from './images/icon_sidebar_logout.png';

export const sideIcon = [explore, profile, chat, setting, logout];

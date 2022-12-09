import axios from 'axios';
import client from './client';

interface Information {
  email: string;
  password: string;
}

export const login = ({ email, password }: Information) => {
  const data = {
    email,
    password,
  };
  client
    .post('/auth/signin', data)
    .then((response) => {
      const { accessToken } = response.data;

      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const register = ({ email, password }: Information) => client.post('/auth/signup', { email, password });

export const check = () => client.get('/auth/check');

export const logout = () => client.post('/auth/logout');

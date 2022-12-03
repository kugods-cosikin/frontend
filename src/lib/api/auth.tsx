import client from './client';

interface Information {
  email: string;
  password: string;
}

export const login = ({ email, password }: Information) => client.post('/auth/signin/apply', { email, password });

export const register = ({ email, password }: Information) => client.post('/auth/signup/apply', { email, password });

// export const logout = () => client.get('/');

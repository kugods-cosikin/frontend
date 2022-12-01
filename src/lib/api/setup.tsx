import client from './client';

interface Information {
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  type: string;
  github?: string;
  stack?: string;
}

export const setup = ({ firstName, lastName, username, bio, type, github, stack }: Information) =>
  client.post('/profile/create/apply', { firstName, lastName, username, bio, type, github, stack });

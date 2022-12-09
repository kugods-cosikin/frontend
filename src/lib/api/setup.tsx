import client from './client';

interface Information {
  image: File | null;
  name: string;
  username: string;
  bio: string;
  type: string;
  github?: string;
  stack?: string;
}

export const hostSetup = ({ image, name, username, bio, type, github, stack }: Information) => {
  const data = { image, name, username, bio, type, github, stack };
  client.post('/profile/create/apply', data);
};

export const guestSetup = ({ image, name, username, bio, type }: Information) => {
  const data = { image, name, username, bio, type };
  client.post('/profile/create/apply', data);
};

import client from './client';

interface Information {
  image: File | null | undefined;
  name: string;
  username: string;
  bio: string;
  type: string;
  github?: string;
  stack?: string;
}

export const hostSetup = ({ image, name, username, bio, type, github, stack }: Information) =>
  client.post('/profile/create/apply', { image, name, username, bio, type, github, stack });

export const guestSetup = ({ image, name, username, bio, type }: Information) =>
  client.post('/profile/create/apply', { image, name, username, bio, type });

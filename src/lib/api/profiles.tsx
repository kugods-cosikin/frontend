import client from './client';

interface Info {
  id: string;
  username: string;
  bio: string;
  type: string;
  github: string;
  stack: string;
}

export const readProfile = (id: string) => client.get(`/api/profile/${id}`);

export const listProfiles = (page: number) => {
  return client.get(`/api/profile?${page}`);
};

export const updateProfile = ({ id, username, bio, type, github, stack }: Info) => {
  if (type === 'host') {
    client.patch(`/api/profile/${id}`, {
      username,
      bio,
      github,
      stack,
    });
  } else {
    client.patch(`/api/profile/${id}`, {
      username,
      bio,
    });
  }
};

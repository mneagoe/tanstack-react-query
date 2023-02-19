import { wait } from '../utils';

const USERS = [
  { id: 1, name: 'Mauro' },
  { id: 2, name: 'Maby' },
];

export const getRandomUserId = () => {
  return Math.floor(Math.random() * USERS.length + 1);
};

export const getUsers = () => {
  return wait(500).then(() => [...USERS]);
};

export const getUser = (id) => {
  return wait(500).then(() => USERS.find((user) => user.id === id));
};

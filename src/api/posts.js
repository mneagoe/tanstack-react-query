import { wait } from '../utils';
import { getRandomUserId } from './users';

const POSTS = [
  { id: 1, title: 'Post 1', body: 'Body for post 1', userId: 2 },
  { id: 2, title: 'Post 2', body: 'Body for post 2', userId: 1 },
];

export const getRandomPost = () => {
  const postId = Math.floor(Math.random() * POSTS.length + 1);
  return POSTS.find((post) => post.id === postId);
};

export const getPosts = () => {
  return wait(500).then(() => [...POSTS]);
};

export const getPost = (id) => {
  return wait(500).then(() => POSTS.find((post) => post.id === id));
};

export const createPost = ({ title, body }) => {
  const id = POSTS.length + 1;
  const userId = getRandomUserId();
  const newPost = { id, userId, title, body };
  return wait(500).then(() => {
    POSTS.push(newPost);
    return newPost;
  });
};

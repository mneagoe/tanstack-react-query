import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createPost } from './api/posts';

const CreatePost = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const createPostMutation = useMutation({
    mutationFn: createPost,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });
  };

  return (
    <>
      {createPostMutation.isError && JSON.stringify(error)}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type='text' ref={titleRef} />
        </div>
        <div>
          <label>Body</label>
          <input type='text' ref={bodyRef} />
        </div>
        <button disabled={createPostMutation.isLoading} type='submit'>
          {createPostMutation.isLoading ? 'Creating post...' : 'Create post'}
        </button>
      </form>
    </>
  );
};

export default CreatePost;

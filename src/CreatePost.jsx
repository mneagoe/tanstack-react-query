import { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from './api/posts';
import Post from './Post';

const CreatePost = ({ setCurrentPage }) => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.setQueryData(['posts', data.id], data)
      queryClient.invalidateQueries(['posts'], { exact: true });
      setCurrentPage(<Post id={data.id} />);
    },
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
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
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

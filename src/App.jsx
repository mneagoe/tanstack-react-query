import { useState } from 'react';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import './App.css';
import CreatePost from './CreatePost';
import Post from './Post';
import PostList1 from './PostList1';
import PostList2 from './PostList2';

// uri -> queryKey
// /posts -> ['posts']
// /posts/1 -> ['posts', post.id]
// /posts?authorId=1 -> ['posts', { authorId: 1 }]
// /posts/2/comments -> ['posts', post.id, 'comments']

function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button onClick={() => setCurrentPage(<Post id={1} />)}>First Post</button>
      <button onClick={() => setCurrentPage(<CreatePost />)}>New Post</button>
      <br />
      {currentPage}
    </div>
  );

  // const queryClient = useQueryClient();
  // const postsQuery = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: (obj) =>
  //     wait(1000).then(() => {
  //       console.log(obj);
  //       return [...POSTS];
  //     }),
  // });

  // const newPostMutation = useMutation({
  //   mutationFn: (title) => {
  //     return wait(1000).then(() =>
  //       POSTS.push({ id: crypto.randomUUID(), title })
  //     );
  //   },
  //   onSuccess: () => {
  //     // This causes postsQuery to execute and fetch posts
  //     queryClient.invalidateQueries(['posts']);
  //   },
  // });

  // if (postsQuery.isLoading) return <h1>Loading...</h1>;
  // if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  // console.log(POSTS);
  // return (
  //   <div className='App'>
  //     <h1>Tanstack query</h1>
  //     {postsQuery.data.map((post) => (
  //       <div key={post.id}>{post.title}</div>
  //     ))}
  //     <button
  //       disabled={newPostMutation.isLoading}
  //       onClick={() => newPostMutation.mutate('New Post')}
  //     >
  //       {newPostMutation.isLoading ? 'Adding new...' : 'Add new'}
  //     </button>
  //   </div>
  // );
}

// function wait(duration) {
//   return new Promise((resolve) => setTimeout(resolve, duration));
// }

export default App;

import { useState } from 'react';
import { getRandomPost } from './api/posts';
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

  const randomPost = getRandomPost();

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button onClick={() => setCurrentPage(<Post id={randomPost.id} />)}>
        Random Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        New Post
      </button>
      <br />
      {currentPage}
    </div>
  );
}

export default App;

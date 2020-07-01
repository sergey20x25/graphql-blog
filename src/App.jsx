import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Empty } from './components/Empty';
import { Post } from './components/Post';

const classes = {
  h2: 'text-sm font-semibold',
  header:
    'bg-gray-300 text-gray-700 py-3 px-4 flex items-center justify-between',
  newPost:
    'bg-green-500 text-white rounded px-4 text-xs py-2 uppercase font-semibold tracking-wide',
};

const GET_POSTS = gql`
  {
    posts {
      id
      createdAt
      body
      title
    }
  }
`;

export const App = () => {
  const { loading, data, refetch } = useQuery(GET_POSTS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <header className={classes.header}>
        <h2 className={classes.h2}>All Posts</h2>
        <Link to="/new" className={classes.newPost}>
          New Post
        </Link>
      </header>
      {data.posts.length === 0 && <Empty />}
      {data.posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          refetch={refetch}
        />
      ))}
    </>
  );
};

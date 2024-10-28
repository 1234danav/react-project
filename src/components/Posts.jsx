import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Posts.css';
import { getPosts } from "../api/Apis";  // Import getPosts from api.js

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <h1>Blog Posts</h1>
      <Link to="/posts/create" className="create-post-link">
        Create New Post
      </Link>
      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <Link to={`/posts/read/${post.id}`}>Read</Link>
                <Link to={`/posts/edit/${post.id}`}>Edit</Link>
                <Link to={`/posts/delete/${post.id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;

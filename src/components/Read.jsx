// src/components/Read.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Read.css';
import { getPostById } from "../api/Apis"; // Import the new function

const Read = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(id); // Fetch the post by ID
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <div className="read-post-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Read;

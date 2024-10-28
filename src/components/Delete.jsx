import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Delete.css';
import { deletePost } from "../api/Apis";  // Import deletePost from api.js

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleDelete = async () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this post?");
      if (confirmDelete) {
        try {
          await deletePost(id);
          alert("Post deleted successfully");
          navigate('/posts');
        } catch (error) {
          console.error('Error deleting the post:', error);
          alert('Error: Unable to delete post.');
        }
      } else {
        navigate('/posts');
      }
    };

    handleDelete();
  }, [id, navigate]);

  return (
    <div className="delete-post-container">
      <p className="delete-post-loading">Deleting post...</p>
    </div>
  );
};

export default Delete;

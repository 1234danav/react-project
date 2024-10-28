import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Create.css';
import { postData } from '../api/Apis';


const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await postData({ title, content });
      alert('Post created successfully');
      navigate('/posts');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error: Unable to create post.');
    }
  };

  return (
    <div className="create-post-container">
      <h1>Create New Post</h1>
      <form onSubmit={handleCreate}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Create;

import axios from "axios";

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: "http://localhost:3001", 
});

// Get method to retrieve all posts
export const getPosts = () => {
  return api.get("/posts"); 
};

// Delete method to delete a post by ID
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// Post method to create a new post
export const postData = (post) => {
  return api.post("/posts", post); 
};

// Put method to update a post by ID
export const updateData = (id, updatedPost) => {
  return api.put(`/posts/${id}`, updatedPost); 
};

// Get method for a single post by ID
export const getPostById = (id) => {
  return api.get(`/posts/${id}`); 
};

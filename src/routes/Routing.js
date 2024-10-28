import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Create from "../components/Create";
import Edit from "../components/Edit";
import Delete from "../components/Delete";
import Posts from "../components/Posts";
import Read from "../components/Read";
import Home from "../components/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/create" element={<Create />} />
        <Route path="/posts/edit/:id" element={<Edit />} />
        <Route path="/posts/delete/:id" element={<Delete />} />
        <Route path="/posts/read/:id" element={<Read />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

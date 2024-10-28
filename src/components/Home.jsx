import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="top-bar">
          <div className="logo">
            <h1 className="logo-text">Letsblog</h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <h2>Welcome to Letsblog</h2>
        <p>Share your stories, ideas, and insights with the world.</p>
        <Link to="/posts/create" className="cta-button">
          Create Your First Post
        </Link>
      </section>

      {/* Recent Posts Section */}
      <section className="recent-posts">
        <h2>Recent Posts</h2>
        <div className="posts">
          {[1, 2, 3].map((index) => (
            <div className="post" key={index}>
              <img
                src={`https://picsum.photos/500/300?random=${index}`}
                alt={`Post ${index}`}
              />
              <h3>Post Title {index}</h3>
              <p>Short description of the blog post goes here...</p>
              <Link to={`/posts/read/${index}`} className="read-more">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Letsblog</h3>
            <p>
              Letsblog is a platform for sharing stories, ideas, and
              experiences.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: info@letsblog.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Letsblog | All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

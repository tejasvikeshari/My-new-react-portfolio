import React from 'react';
import { useNavigate } from 'react-router-dom';
import myPhoto from '../tejasvi.jpg'; 

const Home = () => {
  const navigate = useNavigate();
  const githubURL = "https://github.com/tejasvikeshari"; 
  const linkedinURL = "https://www.linkedin.com/in/tejasvi-kesharwani-9b6706336";

  return (
    <div className="home-container">
      <header className="top-nav">
        <div className="nav-logo">TEJASVI PORTFOLIO</div>
        <div className="nav-links">
           <span className="nav-item">🏠 Home</span>
           <span className="nav-item" onClick={() => navigate('/dashboard')}>📂 Projects</span>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-left">
          <h1>
            <span className="highlight">TEJASVI<br />KESHARWANI</span>
          </h1>
          <div className="description-box">
            <p>
              I am a B.Tech Second year student at United College Of Engineering and Research, Prayagraj. 
              I am a passionate coder and problem solver with a keen interest in web development. 
              Welcome to my portfolio where I showcase my projects and skills!
            </p>
          </div>
          <div className="social-icons">
            <button onClick={() => window.open(githubURL, "_blank")} className="social-link">🌐 GitHub</button>
            <button onClick={() => window.open(linkedinURL, "_blank")} className="social-link">🔗 LinkedIn</button>
          </div>
          <button className="cta-button" onClick={() => navigate('/dashboard')}>
            Click Next to See Projects ➜
          </button>
        </div>

        <div className="hero-right">
          <div className="profile-circle">
            <img src={myPhoto} alt="Tejasvi" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RatingCard from './components/RatingCard';
import JobPage from './components/JobPage';
import styles from './App.module.css';
 import './index.css';
 function App() {
  const openInNewTab = (url) => {
    // Open a new tab
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null; // Prevent reference back to the original window
  };
  return (
    <Router>
      <div className={styles.app}>
        {/* Navigation Bar */}
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <h1 className={styles.logo}>Interview Platform</h1>
            <ul className={styles.navLinks}>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to="/pricing" className={styles.link}>Pricing</Link></li>
              <li><Link to="/solutions" className={styles.link}>Solutions</Link></li>
            </ul>
          </div>
        </nav>

        {/* Body Section */}
        <div className={styles.mainSection}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>Start Your Interview</h2>
            <p className={styles.subtitle}>Click below to begin the interview process</p>
            <button
              className={styles.startButton}
              onClick={() => openInNewTab(`${window.location.origin}/job-description`)}
            >
              Start Interview
            </button>
          </div>

          {/* Image */}
          <div className={styles.imageSection}>
            <img src="https://via.placeholder.com/400" alt="Interview" className={styles.image} />
          </div>
        </div>

        {/* Ratings Section */}
        <div className={styles.ratingsGrid}>
          <RatingCard rating={4} feedback="Great platform! Helped me land my dream job!" />
          <RatingCard rating={5} feedback="Very intuitive and easy to use." />
          <RatingCard rating={5} feedback="Good, but could use more features." />
        </div>
      </div>

     <Routes>
        <Route path="/job-description" element={<JobPage />} />
     </Routes>
    </Router>
  );
}

export default App;

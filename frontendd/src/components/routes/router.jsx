// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ExploreJobs from './pages/ExploreJobs';
import PostJob from './pages/PostJob';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/explore-jobs" element={<ExploreJobs />} />
          <Route path="/post-job" element={<PostJob />} />
          {/* Add a catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
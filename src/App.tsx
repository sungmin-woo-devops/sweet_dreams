import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Generate } from './pages/Generate';
import { ModelDetail } from './pages/ModelDetail';
import { Pricing } from './pages/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/model/:id" element={<ModelDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
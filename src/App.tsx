import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Generate } from './pages/Generate';
import { ModelDetail } from './pages/ModelDetail';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Pricing } from './pages/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/model/:id" element={<ModelDetail />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
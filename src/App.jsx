import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard.jsx';
import Portfolio from './Portfolio.jsx';
import ProjectDetail from './ProjectDetail.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Paneli Yönlendirmeleri */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Portföy Sitesi Yönlendirmeleri */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
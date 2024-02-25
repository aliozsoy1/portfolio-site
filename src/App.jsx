import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import Portfolio from './Portfolio';
import ProjectDetail from './ProjectDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Paneli Yönlendirmeleri */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Portföy Sitesi Yönlendirmeleri */}
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
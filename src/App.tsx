import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ClientManagement from './pages/ClientManagement/ClientManagement';
import Landing from './pages/Landing/Landing';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/clients">Client Management</Link>
        </nav>
      </header>
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/clients" element={<ClientManagement />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import config from './config';
import ClientManagement from './pages/ClientManagement/ClientManagement';

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
          <Route
            path="/"
            element={
              <div>
                <h1>HR.Gov App</h1>
                <p>API: {config.apiUrl}</p>
              </div>
            }
          />
          <Route path="/clients" element={<ClientManagement />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

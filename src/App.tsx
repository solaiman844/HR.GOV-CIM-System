import React from 'react';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing/Landing';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Landing />
    </MainLayout>
  );
};

export default App;

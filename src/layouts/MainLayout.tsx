import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <Box as="main" py={8}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;

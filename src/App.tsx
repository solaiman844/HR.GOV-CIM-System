import React from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Flex, HStack, Spacer, Button, Heading } from '@chakra-ui/react';
import ClientManagement from './pages/ClientManagement/ClientManagement';
import Landing from './pages/Landing/Landing';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box as="header" bg="white" borderBottomWidth="1px">
        <Flex maxW="1100px" mx="auto" py={3} px={4} align="center">
          <Heading size="md">HR.GOV CIM</Heading>
          <Spacer />
          <HStack spacing={3}>
            <Button as={RouterLink} to="/" variant="ghost">Home</Button>
            <Button as={RouterLink} to="/clients" colorScheme="blue">Clients</Button>
          </HStack>
        </Flex>
      </Box>
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

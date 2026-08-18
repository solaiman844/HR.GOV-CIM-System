import React from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Flex, HStack, Spacer, Button, Heading, Text } from '@chakra-ui/react';
import Landing from './pages/Landing/Landing';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box as="header" bg="white" borderBottomWidth="1px">
        <Flex maxW="1100px" mx="auto" py={3} px={4} align="center">
          <Box>
            <Heading size="md">HR.GOV CIM</Heading>
            <Text fontSize="xs" color="gray.500">This is a web page — not a native app.</Text>
          </Box>
          <Spacer />
          <HStack spacing={3}>
            <Button as={RouterLink} to="/" variant="ghost">Home</Button>
          </HStack>
        </Flex>
      </Box>
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Heading, Text, Button, SimpleGrid, Stack } from '@chakra-ui/react';

const Landing: React.FC = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Box textAlign="center" py={8}>
        <Heading as="h1" size="xl" mb={4}>Client Information Management</Heading>
        <Text fontSize="sm" color="gray.500" mb={4}>This is a web page — not a native app.</Text>
        <Text color="gray.600" mb={6}>Manage citizen and employee client records securely for your LGU.</Text>
        <Stack direction="row" spacing={4} justify="center">
          <Button as={RouterLink} to="/clients" colorScheme="blue">Get Started</Button>
          <Button as="a" href="#features" variant="outline">Features</Button>
        </Stack>
      </Box>

      <Box id="features" py={8}>
        <Heading size="lg" mb={6} textAlign="center">What you can do</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
            <Heading size="md">Centralized Records</Heading>
            <Text mt={2} color="gray.600">Store and access client records in a single secure place.</Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
            <Heading size="md">Quick Search & Filters</Heading>
            <Text mt={2} color="gray.600">Find clients fast with powerful search and filtering tools.</Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
            <Heading size="md">Role-Based Access</Heading>
            <Text mt={2} color="gray.600">Control who sees and edits sensitive data.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box as="footer" textAlign="center" py={6} color="gray.600">
        <Text>© {new Date().getFullYear()} HR.GOV CIM — Local Government Unit</Text>
      </Box>
    </Container>
  );
}

export default Landing;

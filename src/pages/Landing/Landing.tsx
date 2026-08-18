import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stack,
  VStack,
  HStack,
  List,
  ListItem,
} from '@chakra-ui/react';

const FeatureCard: React.FC<{ title: string; desc: string; emoji?: string }> = ({ title, desc, emoji }) => (
  <Box p={6} bg="white" borderRadius="md" boxShadow="sm">
    <HStack align="start" spacing={4} mb={3}>
      <Box fontSize="2xl">{emoji || '📁'}</Box>
      <Heading size="sm">{title}</Heading>
    </HStack>
    <Text mt={2} color="gray.600">{desc}</Text>
  </Box>
);

const Landing: React.FC = () => {
  React.useEffect(() => {
    // debug: confirm Landing mounted in browser
    // remove after verification
    // eslint-disable-next-line no-console
    console.log('Landing rendered');
  }, []);
  return (
    <Container maxW="container.lg" py={12}>
      <VStack spacing={8} align="stretch">
        <Box display={{ md: 'flex' }} alignItems="center">
          <Box flex="1">
            <Heading as="h1" size="2xl" mb={4}>
              Client Information Management
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Manage citizen and employee client records securely for your Local Government Unit (LGU). Build trust, improve service delivery, and keep data organized.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button as={RouterLink} to="/clients" colorScheme="blue" size="lg">
                Get Started
              </Button>
              <Button as="a" href="#features" variant="outline" size="lg">
                Features
              </Button>
            </Stack>
          </Box>
          <Box flex="1" display={{ base: 'none', md: 'block' }} pl={8}>
            <Box bg="gray.50" borderRadius="md" p={6} h="220px" display="flex" alignItems="center" justifyContent="center">
              <Text color="gray.400">[Illustration / Screenshot placeholder]</Text>
            </Box>
          </Box>
        </Box>

        <Box as="hr" borderColor="gray.200" borderWidth="1px" my={6} />

        <Box id="features">
          <Heading size="lg" mb={6} textAlign="center">
            Core Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <FeatureCard title="Centralized Records" desc="Store and access client records in a single secure place with audit trails." emoji="🗄️" />
            <FeatureCard title="Quick Search & Filters" desc="Find clients fast using advanced search, filters and sorting." emoji="🔎" />
            <FeatureCard title="Role-Based Access" desc="Grant permissions by role to control who can view or edit data." emoji="🛡️" />
          </SimpleGrid>
        </Box>

        <Box>
          <Heading size="md" mb={4} textAlign="center">
            How it helps your LGU
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box>
              <List spacing={3}>
                <ListItem>• Reduce paperwork and duplicate records</ListItem>
                <ListItem>• Faster response times for citizen requests</ListItem>
                <ListItem>• Improved data security and compliance</ListItem>
              </List>
            </Box>
            <Box>
              <Text color="gray.600">
                The system is designed to be lightweight and easy to deploy for municipal governments. It uses role-based controls and simple workflows so staff can get started quickly.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box as="hr" borderColor="gray.200" borderWidth="1px" my={6} />

        <Box as="footer" textAlign="center" py={6} color="gray.600">
          <Text mb={2}>© {new Date().getFullYear()} HR.GOV CIM — Local Government Unit</Text>
          <Text fontSize="sm">Built with Chakra UI • Not a native app — web only</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Landing;

import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.100' }}>
    {children}
  </Link>
);

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="white" borderBottomWidth="1px">
      <Flex maxW="1100px" mx="auto" py={3} px={4} align="center">
        <Box>
          <Link href="/" fontWeight="bold" fontSize="lg">
            HR.GOV CIM
          </Link>
        </Box>
        <Flex ml="auto" align="center">
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="/clients">Clients</NavLink>
            <Button as="a" href="/clients" colorScheme="blue" size="sm">
              Get Started
            </Button>
          </HStack>
          <IconButton
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <Box as="span" fontSize="lg">✕</Box> : <Box as="span" fontSize="lg">☰</Box>}
            ml={2}
          />
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={2} px={4}>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="/clients">Clients</NavLink>
            <Button as="a" href="/clients" colorScheme="blue" size="sm">
              Get Started
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;

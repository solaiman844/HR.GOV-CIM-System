import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

type State = { error: Error | null };

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log to an external service here
    // console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <Box p={6} bg="white" maxW="800px" mx="auto" mt={8} borderRadius="md" boxShadow="sm">
          <Heading size="md" mb={3}>Application Error</Heading>
          <Text mb={3} color="red.600">{this.state.error.message}</Text>
          <Box as="pre" whiteSpace="pre-wrap" fontSize="sm" mb={3}>{(this.state.error && this.state.error.stack) || 'No stack available'}</Box>
          <Button onClick={() => window.location.reload()}>Reload</Button>
        </Box>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;

import React, { useEffect, useState } from 'react';
import ClientForm from '../../components/ClientForm';
import ClientTable from '../../components/ClientTable';
import clientService, { Client } from '../../services/clientService';
import { Container, Grid, Box, Heading, Spinner, Text } from '@chakra-ui/react';

const ClientManagement: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    clientService.getClients().then((data) => {
      setClients(data);
      setLoading(false);
    });
  }, []);

  const addClient = async (c: Omit<Client, 'id'>) => {
    const created = await clientService.addClient(c);
    setClients((s) => [created, ...s]);
  };

  const deleteClient = async (id: string) => {
    await clientService.deleteClient(id);
    setClients((s) => s.filter((c) => c.id !== id));
  };

  const updateClient = async (client: Client) => {
    const updated = await clientService.updateClient(client);
    setClients((s) => s.map((c) => (c.id === updated.id ? updated : c)));
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading mb={6}>Client Information Management</Heading>
      <Grid templateColumns={{ base: '1fr', md: '360px 1fr' }} gap={6}>
        <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
          <Heading size="md" mb={4}>Add Client</Heading>
          <ClientForm onAdd={addClient} />
        </Box>
        <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
          <Heading size="md" mb={4}>Clients</Heading>
          {loading ? <Spinner /> : <ClientTable clients={clients} onDelete={deleteClient} onUpdate={updateClient} />}
          {!loading && clients.length === 0 && <Text mt={4}>No clients yet</Text>}
        </Box>
      </Grid>
    </Container>
  );
};

export default ClientManagement;

import React, { useEffect, useState } from 'react';
import ClientForm from '../../components/ClientForm';
import ClientTable from '../../components/ClientTable';
import clientService, { Client } from '../../services/clientService';
import '../../styles/client.css';

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
    <div className="client-page">
      <h2>Client Information Management</h2>
      <div className="client-grid">
        <section className="client-form">
          <h3>Add Client</h3>
          <ClientForm onAdd={addClient} />
        </section>
        <section className="client-list">
          <h3>Clients</h3>
          {loading ? <p>Loading...</p> : <ClientTable clients={clients} onDelete={deleteClient} onUpdate={updateClient} />}
        </section>
      </div>
    </div>
  );
};

export default ClientManagement;

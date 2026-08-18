import React, { useState } from 'react';
import { Client } from '../services/clientService';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Input, HStack } from '@chakra-ui/react';

type Props = {
  clients: Client[];
  onDelete: (id: string) => void | Promise<void>;
  onUpdate: (c: Client) => void | Promise<void>;
};

const ClientTable: React.FC<Props> = ({ clients, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Client>>({});

  const startEdit = (c: Client) => {
    setEditingId(c.id);
    setEditForm(c);
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((s) => ({ ...s, [name]: value }));
  };

  const save = async (id: string) => {
    await onUpdate(editForm as Client);
    setEditingId(null);
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>Department</Th>
          <Th>Position</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {clients.map((c) => (
          <Tr key={c.id}>
            <Td>
              {editingId === c.id ? (
                <HStack>
                  <Input name="firstName" value={editForm.firstName as string} onChange={change} />
                  <Input name="lastName" value={editForm.lastName as string} onChange={change} />
                </HStack>
              ) : (
                `${c.firstName} ${c.lastName}`
              )}
            </Td>
            <Td>{editingId === c.id ? <Input name="email" value={editForm.email as string} onChange={change} /> : c.email}</Td>
            <Td>{editingId === c.id ? <Input name="phone" value={editForm.phone as string} onChange={change} /> : c.phone}</Td>
            <Td>{editingId === c.id ? <Input name="department" value={editForm.department as string} onChange={change} /> : c.department}</Td>
            <Td>{editingId === c.id ? <Input name="position" value={editForm.position as string} onChange={change} /> : c.position}</Td>
            <Td>
              {editingId === c.id ? (
                <HStack>
                  <Button size="sm" colorScheme="green" onClick={() => save(c.id)}>Save</Button>
                  <Button size="sm" onClick={() => setEditingId(null)}>Cancel</Button>
                </HStack>
              ) : (
                <HStack>
                  <Button size="sm" onClick={() => startEdit(c)}>Edit</Button>
                  <Button size="sm" colorScheme="red" onClick={() => onDelete(c.id)}>Delete</Button>
                </HStack>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ClientTable;

import React, { useState } from 'react';
import { Client } from '../services/clientService';
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

type Props = {
  onAdd: (c: Omit<Client, 'id'>) => void | Promise<void>;
};

const blank = { firstName: '', lastName: '', email: '', phone: '', department: '', position: '' };

const ClientForm: React.FC<Props> = ({ onAdd }) => {
  const [form, setForm] = useState(blank);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onAdd(form);
    setForm(blank);
  };

  return (
    <form onSubmit={submit}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input name="firstName" value={form.firstName} onChange={change} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last name</FormLabel>
          <Input name="lastName" value={form.lastName} onChange={change} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" value={form.email} onChange={change} />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input name="phone" value={form.phone} onChange={change} />
        </FormControl>
        <FormControl>
          <FormLabel>Department</FormLabel>
          <Input name="department" value={form.department} onChange={change} />
        </FormControl>
        <FormControl>
          <FormLabel>Position</FormLabel>
          <Input name="position" value={form.position} onChange={change} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Add Client</Button>
      </Stack>
    </form>
  );
};

export default ClientForm;

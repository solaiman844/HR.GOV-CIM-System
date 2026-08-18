import React, { useState } from 'react';
import { Client } from '../services/clientService';

type Props = {
  onAdd: (c: Omit<Client, 'id'>) => void | Promise<void>;
};

const blank = { firstName: '', lastName: '', email: '', phone: '', department: '', position: '' };

const ClientForm: React.FC<Props> = ({ onAdd }) => {
  const [form, setForm] = useState(blank);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onAdd(form);
    setForm(blank);
  };

  return (
    <form onSubmit={submit} className="client-form-form">
      <div>
        <label>First name</label>
        <input name="firstName" value={form.firstName} onChange={change} required />
      </div>
      <div>
        <label>Last name</label>
        <input name="lastName" value={form.lastName} onChange={change} required />
      </div>
      <div>
        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={change} />
      </div>
      <div>
        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={change} />
      </div>
      <div>
        <label>Department</label>
        <input name="department" value={form.department} onChange={change} />
      </div>
      <div>
        <label>Position</label>
        <input name="position" value={form.position} onChange={change} />
      </div>
      <div>
        <button type="submit">Add Client</button>
      </div>
    </form>
  );
};

export default ClientForm;

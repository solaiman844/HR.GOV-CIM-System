import React, { useState } from 'react';
import { Client } from '../services/clientService';

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
    <table className="client-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Department</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((c) => (
          <tr key={c.id}>
            <td>
              {editingId === c.id ? (
                <>
                  <input name="firstName" value={editForm.firstName as string} onChange={change} />
                  <input name="lastName" value={editForm.lastName as string} onChange={change} />
                </>
              ) : (
                `${c.firstName} ${c.lastName}`
              )}
            </td>
            <td>{editingId === c.id ? <input name="email" value={editForm.email as string} onChange={change} /> : c.email}</td>
            <td>{editingId === c.id ? <input name="phone" value={editForm.phone as string} onChange={change} /> : c.phone}</td>
            <td>{editingId === c.id ? <input name="department" value={editForm.department as string} onChange={change} /> : c.department}</td>
            <td>{editingId === c.id ? <input name="position" value={editForm.position as string} onChange={change} /> : c.position}</td>
            <td>
              {editingId === c.id ? (
                <>
                  <button onClick={() => save(c.id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEdit(c)}>Edit</button>
                  <button onClick={() => onDelete(c.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;

export type Client = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  department?: string;
  position?: string;
};

let store: Client[] = [
  {
    id: '1',
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    email: 'juan@example.com',
    phone: '09171234567',
    department: 'HR',
    position: 'Staff',
  },
  {
    id: '2',
    firstName: 'Maria',
    lastName: 'Santos',
    email: 'maria@example.com',
    phone: '09179876543',
    department: 'Admin',
    position: 'Officer',
  },
];

const wait = (ms = 200) => new Promise((r) => setTimeout(r, ms));

const clientService = {
  async getClients() {
    await wait(200);
    return [...store];
  },
  async addClient(c: Omit<Client, 'id'>) {
    await wait(150);
    const item: Client = { id: String(Date.now()), ...c } as Client;
    store = [item, ...store];
    return item;
  },
  async updateClient(c: Client) {
    await wait(150);
    store = store.map((s) => (s.id === c.id ? c : s));
    return c;
  },
  async deleteClient(id: string) {
    await wait(120);
    store = store.filter((s) => s.id !== id);
    return true;
  },
};

export default clientService;

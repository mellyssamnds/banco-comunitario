import { Injectable } from '@nestjs/common';
import { Client } from './client.model';

@Injectable()
export class ClientService {
  private client: Client[] = [];

  createClient(
    name: string,
    address: string,
    phoneNumber: string,
    salary: number,
    email: string,
    cpf: string,
  ): Client {
    const newClient = new Client(
      name,
      address,
      phoneNumber,
      salary,
      email,
      cpf,
    );
    this.client.push(newClient);
    return newClient;
  }

  getAllClients(): Client[] {
    return this.client;
  }

  getClientById(id: string): Client {
    return this.client.find((client) => client.id === id);
  }

  deleteClient(id: string): void {
    this.client = this.client.filter((client) => client.id !== id);
  }

  updateClient(
    id: string,
    name: string,
    address: string,
    phoneNumber: string,
    salary: number,
    email: string,
    cpf: string,
  ): Client {
    const client = this.getClientById(id);

    if (!client) {
      return null;
    }

    client.name = name;
    client.address = address;
    client.phoneNumber = phoneNumber;
    client.salary = salary;
    client.email = email;
    client.cpf = cpf;

    return client;
  }

  patchClient(id: string, updates: Partial<Client>): Client {
    const client = this.getClientById(id);

    if (!client) {
      return null;
    }

    const details = [
      'name',
      'address',
      'phoneNumber',
      'salary',
      'email',
      'cpf',
    ];

    Object.keys(updates).forEach((key) => {
      if (details.includes(key)) {
        client[key] = updates[key];
      }
    });
    return client;
  }
}

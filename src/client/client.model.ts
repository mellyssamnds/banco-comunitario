import { v4 as uuidv4 } from 'uuid';

export class Client {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  salary: number;
  email: string;
  cpf: string;
  manager: string;
  accounts: Enumerator;

  constructor(
    name: string,
    address: string,
    phoneNumber: string,
    salary: number,
    email: string,
    cpf: string,
  ) {
    this.id = uuidv4();
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.salary = salary;
    this.email = email;
    this.cpf = cpf;
  }
}

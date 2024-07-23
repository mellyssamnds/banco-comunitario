import { v4 as uuidv4 } from 'uuid';
//import { Person} from "./client.model";

export class Manager {
  id: string;
  name: string;
  //private clients: Person[] = [];

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }
}

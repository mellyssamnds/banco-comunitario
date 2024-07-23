//import { throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export enum accountType {
  savings = `SAVINGS ACCOUNT`,
  checking = `CHECKING ACCOUNT`,
}

export class BankAccount {
  id: string;
  accountNumber: string;
  agencyNumber: string;
  balance: number;
  specialLimit: number;
  manager: string;
  accountType: accountType;

  constructor(accountNumber: string, agencyNumber: string) {
    this.id = uuidv4();
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.balance = this.balance;
    this.specialLimit = this.specialLimit;
    this.accountType = this.accountType;
    this.manager = this.manager;
  }

  public getId(): string {
    return this.id;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }
    this.balance += amount;
    console.log(`Balance updated after deposit: R$ ${this.balance}`);
  }

  public transfer(amount: number, receiver: BankAccount): void {
    if (amount <= 0) {
      throw new Error('Transfer amount must be greater than zero');
    }

    if (amount > this.balance) {
      throw new Error('Insufficient funds for the transaction');
    }

    if (!receiver) {
      throw new Error('Receiver account must be valid');
    }

    this.balance -= amount;
    receiver.balance += amount;

    console.log(
      `Transfer successful! R$${amount} has been transferred to receiver account`,
    );
    console.log(`Your updated balance: R$${this.balance}`);
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }
  }
}

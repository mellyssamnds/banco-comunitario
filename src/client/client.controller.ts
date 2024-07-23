import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.model';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('create')
  createClient(
    @Body()
    body: {
      name: string;
      address: string;
      phoneNumber: string;
      salary: number;
      email: string;
      cpf: string;
    },
  ) {
    if (!body || Object.keys(body).length === 0) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Body cannot be empty',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const { name, address, phoneNumber, salary, email, cpf } = body;

    if (!name || !address || !phoneNumber || !salary || !email || !cpf) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message:
            'All fields are required: name, address, phoneNumber, salary, email and cpf',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const client = this.clientService.createClient(
      body.name,
      body.address,
      body.phoneNumber,
      body.salary,
      body.email,
      body.cpf,
    );

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Client created successfuly',
      data: client,
    };
  }

  @Get('all')
  getAll() {
    const clients = this.clientService.getAllClients();

    if (!clients) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'There are no clients registered on the server',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'All clients returned successfuly',
      data: clients,
    };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const client = this.clientService.getClientById(id);

    if (!client) {
      throw new HttpException('Client not exists', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Client returned successfuly',
      data: client,
    };
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    const clientDeleted = this.clientService.getClientById(id);

    if (!clientDeleted) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Client not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: 'Client deleted with success',
    };
  }

  @Put(':id')
  updateClient(@Param('id') id: string, @Body() updates: Partial<Client>) {
    const updatedClient = this.clientService.patchClient(id, updates);

    if (!updatedClient) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Client not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Client updated successfully',
      data: updatedClient,
    };
  }

  @Patch('/edit/:id')
  patchClient(@Param('id') id: string, @Body() updates: Partial<Client>) {
    const client = this.clientService.patchClient(id, updates);

    if (!client) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Client not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Client updated successfully',
      data: client,
    };
  }
}

import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { ClienteService } from "../services/cliente.service";
import { ClienteModel } from "../models/cliente.model";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Clientes")
@Controller("clientes")
export class ClientesController {

    //método construtor para injeção de dependência
    constructor(private clienteService: ClienteService) {}

    @ApiOperation({
        summary: 'Serviço para cadastro de cliente.',
        description: 'Adiciona um cliente no banco de dados.'
    })
    @Post()
    post(@Body(new ValidationPipe()) cliente: ClienteModel): Promise<ClienteModel> {
        return this.clienteService.add(cliente);
    }

    @ApiOperation({
        summary: 'Serviço para consulta de clientes.',
        description: 'Retorna uma lista com todos os clientes do banco de dados.'
    })
    @Get()
    getAll() : Promise<ClienteModel[]> {
        return this.clienteService.findAll();
    }

}
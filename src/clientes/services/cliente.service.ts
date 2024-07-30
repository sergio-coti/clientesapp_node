import { Injectable } from "@nestjs/common";
import { ClienteModel } from "../models/cliente.model";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from "../entities/cliente.entity";
import { Repository } from "typeorm";

@Injectable()
export class ClienteService {

    //método construtor (injeção de dependência)
    constructor(
        @InjectRepository(ClienteEntity)
        private clienteRepository: Repository<ClienteEntity>
    ){}

    //função para adicionar um cliente
    async add(cliente: ClienteModel) : Promise<ClienteModel> {
        
        //capturando os dados do cliente e criando a entidade
        const clienteEntity = this.clienteRepository.create({
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email
        });

        //salvando no banco de dados e capturando a resposta
        const result = await this.clienteRepository.save(clienteEntity);

        //retornando os dados
        return this.mapToDto(result);
    }

    //método para retornar os clientes
    async findAll(): Promise<ClienteModel[]> {
        
        //consultando todos os clientes do banco de dados
        const lista = await this.clienteRepository.find();
        //retornando os dados
        return lista.map(this.mapToDto);
    }

    //função auxiliar para transferir os dados de um objeto
    //ClienteEntity para ClienteModel
    private mapToDto(clienteEntity: ClienteEntity): ClienteModel {
        const { id, nome, email } = clienteEntity;
        return { id, nome, email };
    }
}
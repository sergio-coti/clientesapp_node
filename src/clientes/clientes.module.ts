import { Module } from '@nestjs/common';
import { ClientesController } from './controllers/clientes.controller';
import { ClienteService } from './services/cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ClienteEntity])
    ],
    controllers: [
        ClientesController
    ],
    providers: [
        ClienteService
    ]
})
export class ClientesModule {}

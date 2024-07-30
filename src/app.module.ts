import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'coti',
      database: 'bdprojeto02',
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    ClientesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

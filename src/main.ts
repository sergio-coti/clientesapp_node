import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //configuração para gerar a documentação da API através do Swagger
  const  config = new DocumentBuilder()
    .setTitle("Clientes API - NestJS")
    .setDescription("Treinamento DOCKER - COTI Informática")
    .setVersion("1.0")
    .build();

  //criando a página da documentação
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
}
bootstrap();

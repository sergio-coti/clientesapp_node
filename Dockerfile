# Etapa 1: Build da aplicação
FROM node:18-alpine AS build

#Criar o diretório de trabalho
WORKDIR /app

#Copiar o package.json e o package-lock.json
COPY package*.json ./

#Instalando as dependências do projeto
RUN npm install

#Copiando o restante do código da aplicação
COPY . .

#Compilando a aplicação
RUN npm run build

#Etapa 2: Implantação do projeto
FROM node:18-alpine

#Criar um diretório de trabalho
WORKDIR /app

#Copiar as dependências da etapa do build
COPY --from=build /app/node_modules ./node_modules

#Copiar o build da aplicação da etapade buid
COPY --from=build /app/dist ./dist

#Expondo a porta de execução do projeto dentro do container
EXPOSE 3000

#Comando para executar o projeto
CMD ["node", "dist/main"]







# TCC-WEB: Preocesso Seletivo.

Este é um projeto simples para gerenciar tarefas, desenvolvido como parte de um desafio prático de um Processo Seletivo da UFJF. 

## Funcionalidades

* **Adicionar Tarefa:** Adicione novas tarefas.
* **Listar Tarefas:** Visualize todas as tarefas cadastradas.
* **Remover Tarefa:** Exclua tarefas existentes.

## Estrutura do Projeto

O projeto está organizado em duas pastas principais:

* `backend/`: Contém o código da API Restful desenvolvida com NestJS.
* `frontend/`: Contém o código da interface do usuário desenvolvida com React.

## Como Rodar o Projeto Localmente

Siga as instruções abaixo para configurar e executar a aplicação em seu ambiente de desenvolvimento.

### Pré-requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

* **Node.js**: Versão 18 ou superior.
* **npm**: Gerenciador de pacotes do Node.js (geralmente vem com o Node.js).
* **PostgreSQL**: Servidor de banco de dados rodando localmente.

### 1. Configuração do Banco de Dados

1.  Certifique-se de que seu servidor PostgreSQL esteja **rodando**.
2.  Crie um novo banco de dados para este projeto. Sugestão de nome: `tarefas`.
    * Exemplo de comando SQL (via `psql` ou ferramenta gráfica como pgAdmin/DBeaver):
        ```sql
        CREATE DATABASE tarefas;
        ```
3.  Crie um arquivo `.env` na pasta `backend/` (se ainda não existir) e adicione a string de conexão ao seu banco de dados:
    ```
    DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/tarefas?schema=public"
    ```
    * **Substitua `USUARIO` e `SENHA`** pelas credenciais do seu usuário PostgreSQL. Por exemplo, se seu usuário padrão é `postgres` e a senha é `root`:
        `DATABASE_URL="postgresql://postgres:root@localhost:5432/tarefas?schema=public"`

### 2. Configuração e Execução do Backend

1.  Abra seu terminal e navegue até a pasta `backend/`:
    ```bash
    cd backend
    ```
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Aplique as migrações do Prisma para criar as tabelas necessárias no seu banco de dados:
    ```bash
    npx prisma migrate dev --name init_tasks_table
    ```
    * Se você tiver problemas ou quiser resetar seu banco de dados de desenvolvimento, pode usar: `npx prisma migrate reset`
4.  Inicie o servidor de desenvolvimento do backend:
    ```bash
    npm run start:dev
    ```
    O backend estará rodando em `http://localhost:3000`. Deixe este terminal aberto.

### 3. Configuração e Execução do Frontend

1.  Abra um **novo terminal** e navegue até a pasta `frontend/` (a partir da raiz do seu projeto `TCC-WEB`):
    ```bash
    cd frontend
    ```
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento do frontend:
    ```bash
    npm run dev
    ```
    O frontend estará rodando em `http://localhost:5173` (ou uma porta similar, como `5174`, dependendo da disponibilidade). Deixe este terminal aberto.

### 4. Usando a Aplicação

1.  Com ambos os servidores (backend e frontend) rodando, abra seu navegador web.
2.  Acesse a URL do seu frontend (geralmente `http://localhost:5173` ou a porta que seu terminal do frontend indicou).
3.  Você poderá:
    * Digitar o título de uma tarefa no campo de texto e clicar em "Adicionar Tarefa" para salvá-la.
    * Visualizar a lista de tarefas cadastradas.
    * Clicar no botão "Remover" ao lado de uma tarefa para excluí-la.

---

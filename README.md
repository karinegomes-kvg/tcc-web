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

1.  Crie o banco de dados de tarefas:
   ```bash
    psql -c "CREATE DATABASE tarefas;"
   ```
2. atualize o arquivo .env com a sua senha e usuário.
    ```
    DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/tarefas?schema=public"
    ```
### 2. Configuração e Execução do Backend

Abra seu terminal e navegue até a pasta `backend/`:
   
    
    cd backend
    
    npm install
    
    npx prisma migrate dev --name init_tasks_table
    
    npm run start:dev
    
### 3. Configuração e Execução do Frontend

Abra um **novo terminal** e navegue até a pasta `frontend/` (a partir da raiz do seu projeto `TCC-WEB`):
    
    
    cd frontend
    
    npm install
    
    npm run dev
    

### 4. Usando a Aplicação
1.  Com ambos os servidores (backend e frontend) rodando, abra seu navegador web.
2.  Acesse a URL do seu frontend.
3.  Você poderá:
    * Digitar o título de uma tarefa no campo de texto e clicar em "Adicionar Tarefa" para salvá-la.
    * Visualizar a lista de tarefas cadastradas.
    * Clicar no botão "Remover" ao lado de uma tarefa para excluí-la.

obs.: Este projeto foi realizado utilizando o auxilio do ChatGPT e Google Gemini.

---

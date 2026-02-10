# CRUD de Clientes

Este projeto foi desenvolvido com o objetivo de praticar a criação de um CRUD completo, integrando um backend em Node.js com um frontend em React.

O sistema permite cadastrar, listar, editar e excluir clientes, utilizando um banco de dados MySQL para armazenar as informações.

---

### Senha

senha que está pedindo no codigo:

```bash
climba
```

## Tecnologias utilizadas

### Backend
- Node.js
- Express
- MySQL

### Frontend
- React
- Vite
- Axios
- Bootstrap

---

## Funcionalidades

- Cadastro de clientes
- Listagem de clientes cadastrados
- Edição de dados do cliente
- Exclusão de clientes
- Campo de data com calendário
- Campo de profissão
- Campo de observações

---

## Estrutura do projeto

```
crud-clientes
├── backend
│   ├── server.js
│   ├── db.js
│   ├── routes
│   └── controllers
└── frontend
    ├── src
    ├── components
    └── services
```

---

## Como executar o projeto

### Pré-requisitos
- Node.js instalado
- MySQL instalado

---

### Banco de dados

Crie o banco de dados:

```sql
CREATE DATABASE crud_clientes;
```

Selecione o banco:

```sql
USE crud_clientes;
```

Crie a tabela:

```sql
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  data_nascimento DATE,
  profissao VARCHAR(50),
  observacoes TEXT
);
```

---

### Backend

No terminal:

```bash
cd backend
npm install
node server.js
```

O backend ficará rodando em `http://localhost:3001`.

---

### Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

O frontend ficará disponível em `http://localhost:5173`.


# API Gerenciador de Vendas - BeTalent
Esse projeto é uma API de Gerenciamento de Vendas desenvolvida como parte do teste técnico da BeTalent. Com ela, você pode gerenciar clientes, produtos e vendas. A API permite cadastrar usuários, fazer login, registrar clientes, adicionar produtos e registrar vendas. Feita usando Adonis.js e MySQL.

## Pré-requisitos
- Node.js
- npm
- Docker (opcional, se desejar usar Docker para o banco de dados)

## Instalação

1. Clone o repositório:
  ``` bash
  git clone https://github.com/telesleo/sales-management-api.git
  ```
2. Entre no diretório do projeto:
  ``` bash
  cd sales-management-api
  ```
3. Instale as dependências:
  ``` bash
  npm install
  ```
4. Crie uma cópia do arquivo .env.example e mude o nome para .env

5. Configure o banco de dados
  - Usando docker:
      ``` bash
      docker-compose up
      ```
  - Manualmente:

    Configure o banco de dados manualmente e atualize o arquivo .env com as credenciais apropriadas.

6. Inicie o servidor:
  ``` bash
  npm start
  ```
## Endpoints

<details>
  <summary>Usuários</summary>
  
### Registrar um usuário
- **Endpoint:** `POST /signup`
- **Body:**
``` json
{
  "email": "example@email.com",
  "password": "examplepassword",
  "name": "Marcos"
}
```

### Login
- **Endpoint:** `POST /signup`
- **Body:**
  ``` json
  {
    "email": "example@email.com",
    "password": "examplepassword"
  }

O endpoint login retornará um token que será usado para autenticação nas as próximas rotas, o token deve ser enviado pelo header Authorization da requisição
  
</details>

<details>
  <summary>Clientes</summary>
  
### Registrar um cliente
- **Endpoint:** `POST /customers`
- **Body:**
``` json
{
    "cpf": "00000000000",
    "name": "Carlos"
}
```

### Exibir todos os clientes
- **Endpoint:** `GET /customers/`

### Exibir um cliente individual
- **Endpoint:** `GET /customers/:id`
- **Query:**
  - month (número): Filtrar por mês
  - year (número): Filtrar por ano

### Atualizar um cliente
- **Endpoint:** `PUT /customers/:id`
- **Body:**
``` json
{
    "cpf": "00000000000",
    "name": "Fernanda"
}
```

### Deletar um cliente
- **Endpoint:** `DELETE /customers/:id`

</details>

<details>
  <summary>Produtos</summary>
  
### Registrar um produto
- **Endpoint:** `POST /products`
- **Body:**
``` json
{
    "name": "Aspirador de pó",
    "description": "Aspirador de pó portátil de alta capacidade",
    "price": 60000
}
```

### Exibir todos os produtos
- **Endpoint:** `GET /products/`

### Exibir um produto individual
- **Endpoint:** `GET /products/:id`

### Atualizar um produto
- **Endpoint:** `PUT /products/:id`
- **Body:**
``` json
{
    "name": "Aspirador de pó",
    "description": "Aspirador de pó portátil de alta capacidade",
    "price": 65000
}
```

### Deletar um produto
- **Endpoint:** `DELETE /products/:id`

</details>

</details>

<details>
  <summary>Vendas</summary>
  
### Registrar uma venda
- **Endpoint:** `POST /sales`
- **Body:**
``` json
{
    "customerId": 1,
    "productId": 2,
    "amount": 5
}
```

</details>

<details>
  <summary>Endereços</summary>
  
### Registrar um endereço
- **Endpoint:** `POST /addresses`
- **Body:**
``` json
{
    "customerId": 1,
    "country": "Brazil",
    "state": "Paraná",
    "city": "Curitiba",
    "street": "Rua do Limoeiro",
    "number": 123
}
```

### Exibir todos os endereços
- **Endpoint:** `GET /addresses/`

### Exibir um endereço individual
- **Endpoint:** `GET /addresses/:id`

### Atualizar um endereço
- **Endpoint:** `PUT /addresses/:id`
- **Body:**
``` json
{
    "customerId": 1,
    "country": "Brasil",
    "state": "Paraná",
    "city": "Curitiba",
    "street": "Rua do Limão",
    "number": 123
}
```

### Deletar um endereço
- **Endpoint:** `DELETE /addresses/:id`

</details>

<details>
  <summary>Números de Telefone</summary>
  
### Registrar um número de telefone
- **Endpoint:** `POST /phone-numbers`
- **Body:**
``` json
{
    "customerId": 1,
    "number": "00111112222"
}
```

### Exibir todos números de telefone
- **Endpoint:** `GET /phone-numbers/`

### Exibir um número de telefone individual
- **Endpoint:** `GET /phone-numbers/:id`

### Atualizar um número de telefone
- **Endpoint:** `PUT /phone-numbers/:id`
- **Body:**
``` json
{
    "customerId": 1,
    "number": "11222223333"
}
```

### Deletar um número de telefone
- **Endpoint:** `DELETE /phone-numbers/:id`

</details>

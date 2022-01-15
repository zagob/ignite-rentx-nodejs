# Cadastro de carro

**RF** => Requisitos funcionais

- Deve ser possivel cadastrar um novo carro.
- Deve ser possivel listar todas as categorias.

**RNF** => Requisitos NÃO funcionais

**RN** => Regra de negocio

- Não deve ser possivel cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado com disponibilidade por padrão.
- O usuário responsável pelo cadastro deve ser um admin.

---

# Listagem de carros

**RF** => Requisitos funcionais

- Deve ser possivel todos os carros disponíveis.
- Deve ser possivel listas todos os carros disponíveis pelo nome da categoria.
- Deve ser possivel listas todos os carros disponíveis pelo nome da marca.
- Deve ser possivel listas todos os carros disponíveis pelo nome do carro.

**RNF** => Requisitos NÃO funcionais

**RN** => Regra de negocio

- O usuário não precisa está logado no sistema.

---

# Cadastro de especificação no carro

**RF** => Requisitos funcionais

- Deve ser possivel cadastrar uma especificação para um carro.
- Deve ser possivel listar todas as especificações.

**RNF** => Requisitos NÃO funcionais

**RN** => Regra de negocio

- Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possivel cadastrar uma especificação já existente para o mesmo
  carro.
- O usuário responsável pelo cadastro deve ser um admin.

---

# Cadastro de imagens do carro

**RF** => Requisitos funcionais

- Deve ser possivel cadastrar a imagem do carro.

**RNF** => Requisitos NÃO funcionais

- Utilizar o multer para upload dos arquivos.
- deve ser possível listar todos os carros.

**RN** => Regra de negocio

- O usuárui deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um admin.

---

# Aluguel de carro

**RF** => Requisitos funcionais

- Deve ser possível cadastrar um aluguel.

**RNF** => Requisitos NÃO funcionais

**RN** => Regra de negocio

- O aluguel deve ter duração minima de 24 hora.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para
  o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para
  o mesmo carro.


# Listagem de Alugueis para usuário

**RF** => Requisitos funcionais

- Deve ser possível realizar a busca de todos os alugueis para o usuário.

**RN** => Regra de negocio

- O usuário deve estar logado na aplicação.

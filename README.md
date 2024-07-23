# vix bank
Projeto Integrador desenvolvido durante a Imersão JavaScript da [{reprograma}](https://reprograma.com.br/), que implementa um Banco Comunitário com alguns serviços baseados no documento da **[Rede Brasileira de Bancos Comunitários](https://repositorio.ipea.gov.br/bitstream/11058/4059/1/bmt41_10_Eco_Bancos_41.pdf).**

O curso Imersão Javascript com foco em Back-end é uma iniciativa da {reprograma} desenvolvida com o objetivo de promover uma capacitação focada no aperfeiçoamento de conhecimentos técnicos em JavaScript, especificamente voltados para área de back-end e no desenvolvimento profissional de mulheres com carreira na área de tecnologia, através de uma formação de aperfeiçoamento para aquelas que já possuem conhecimento na linguagem.

Esse projeto consiste em implementar um Banco Comunitário chamado *vix bank*. Bancos comunitários são serviços financeiros solidários que visam gerar trabalho e renda, promovendo o desenvolvimento de economias locais, especialmente em territórios de baixa renda, por meio do apoio à economia popular e solidária.

Para iniciar a implementação, é necessário criar classes e interfaces apropriadas para representar clientes, suas contas bancárias e implementar métodos para interagir com esses dados, como criar uma nova conta para um cliente, depositar, sacar e transferir dinheiro entre contas.

Neste projeto aprofundaremos o conhecimento na criação e consumo de API’s com a criação de uma API RESTful que implementa um sistema bancário simples, compreendendo os princípios e características de uma arquitetura RESTful e identificando recursos, URIs, métodos HTTP e códigos de status comuns em uma API REST, seguindo as boas práticas de código.

#### Requisitos:
Cada cliente do banco deve ter as seguintes informações:
- nome completo;
- número de identificação (ID);
- endereço;
- número de telefone;
- renda salarial;
- e-mail;

Ao cliente do banco ser adicionadas as seguintes informações:
- contas;
- gerente;

O Gerente deve ter as seguintes informações:
- nome completo;
- número de identificação (ID);
- clientes;

#### Requisitos de negócio:
- As contas podem ser do tipo Conta Corrente ou Conta Poupança;
- A partir de R$ 500,00 o cliente pode ter uma Conta Corrente;
- Para a Conta Corrente, é necessário armazenar o limite do cheque especial (R$ 100,00);
- Criar classes para representar Cliente e Gerente, incluindo os atributos mencionados no diagrama;
- Implementar métodos nas classes Cliente e Gerente para abrir, fechar e modificar o tipo de conta;
- Atualizar a classe Conta para manter uma referência ao cliente associado a ela;
- Implementar métodos na classe Gerente para adicionar e remover clientes, bem como para abrir, fechar e modificar o tipo de conta para um determinado cliente;
- Organizar a estrutura do projeto de forma apropriada, seguindo as melhores práticas para uma API RESTful;

## Tecnologias utilizadas

| Ferramenta       | Descrição                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |        
| `javascript`     | Linguagem de programação                                                                                                           |
| `nestjs`         | Framework para construir aplicativos Node.js server-side eficientes e escaláveis
| `nodejs`         | Ambiente de execução do JavaScript                                                                                                 |
| `nodemon`        | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente                            |
| `npm`            | Gerenciador de pacotes                                                                                                             |
| `TypeScript`     | Linguagem de programação superset de JavaScript, que se integra naturalmente ao ecossistema do Node.js                                                                                                                                                      |

<br>


## Rotas

#### Client

- **POST**/client/create
  > cadastra/cria um cliente no servidor
- **GET**/client/:id
  > lista os detalhes de um cliente
- **GET**/client/all
  > lista todos os clientes cadastrados
- **PATCH**/client/edit/:id
  > atualiza determinados campos do cliente
- **DELETE**/client/:id
  > apaga um cliente cadastrado no servidor
- **PUT**/client/:id
  > atualiza os dados de um cliente no servidor

## Executando o Projeto

```bash
# Clone o repositório
$ git clone https://github.com/mellyssamnds/vix-bank.git

# Entre na pasta do projeto
$ cd vix-bank

# Mude para a branch que implementa as mudanças
$ git checkout -b feat/week3-api

# Instale as dependências
$ npm install

# Execute o servidor
$ npm run start:dev
```


  <p align="center">Projeto Integrador desenvolvido durante a Imersão JavaScript da <a href="https://reprograma.com.br/">{reprograma}</a></p>
  <p align="center">Feito com 💜 by Mellyssa Stephanny</p>

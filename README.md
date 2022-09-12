
<h1 align="center">SENAC</h1>
<p align="center">Portfólio criado para Projeto Integrador para a matéria "2202-PROJETO INTEGRADOR: DESENVOLVIMENTO DE SISTEMA WEB MODULARIZÁVEL do curso de Tecnologia em Sistemas para Internet do <a href="https://ead.senac.br/">Senac</a>. São Paulo, 11/09/2022.</p>

<p>A aplicação Web desenvolvida tem o intuito de facilitar a troca de doações. Foi feito uma página principal com a descrição do projeto, exibição dos donativos e informações gerais. Temos 3 principais links: Cadastro, Quero Doar e Login. Foi criada a integração em JavaScript para alimentar um banco de dados com as informações dos usuários. Nessa implementação é possível cadastrar/deletar usuários e donativos. No caso de um usuário já ser cadastrado uma mensagem de erro será exibida.</p>

<h2>Integrantes do grupo:
<ul>
    <li>CARLOS DANIEL RODRIGUES DA COSTA LEAL</li>
    <li>GUILHERME BARDINI DA ROCHA BRESSANE</li>
    <li>GUILHERME HENRIQUE PEREIRA PALURI</li>
    <li>LEONARDO HENRIQUE DA SILVA</li>
    <li>SUELI SOARES DE LIMA</li>
</ul>

<h4>Referências de pesquisa para execução do projeto:</h4>
          <ul>
          <li><strong>SANTIAGO</strong>, Jefferson. Título: Web Standards. Editora Senac, São Paulo, 2016.</li>
          <li><strong><a href="https://getbootstrap.com/">Bootstrap</a></strong>, https://getbootstrap.com/ acessado em 5/09/22.</li>
          <li><strong><a href="https://www.w3schools.com/">W3schools</a></strong>, https://www.w3schools.com/ acessado em 5/09/22.</li>
          <li><strong>Para baixar este projeto no <a href="https://github.com/guibressane/projetointegrador">Github</a></strong>, https://github.com/guibressane/projetointegrador</li>

Configurações do banco no arquivo knexfile.js

## :gear: Configurando o projeto 
```bash

# Instale todas as dependências
$ npm i

# Instale o knex globalmente
$ npm i knex -g

# Altere o password de acordo com sua senha no DB localhost no knexfile
$ knexfile.js

# Crie um schema no MySQL chamado "project" (sem aspas)

# Cria todas as tabelas do banco de dados
$ knex migrate:latest

# Inicie o modo de desenvolvimento
$ npm run dev

# Abra o arquivo na pasta layout
$ index.html
```

## :computer: Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express) 
- [Mysql2](https://www.npmjs.com/package/mysql2)
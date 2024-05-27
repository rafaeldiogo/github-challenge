<p align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />

<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />

<img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" />

<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />

<img src="https://img.shields.io/badge/vite-purple?style=for-the-badge&logo=vite&logoColor=white" />

</p>

# 📋 Desafio consumo de API do GitHub
    
## ⚙️ Configuração do projeto

### Utilizando Docker
Antes de executar o projeto, é necessário ter o Docker instalado na máquina.
### Sem Docker
Antes de executar o projeto, é necessário ter o npm e o node instalados em sua máquina.

> [!note]

> ℹ️ **Informação do sistema:**

> npm ~> v10.8.0
> node ~> v20.11.1


Após verificar ou instalar o node e o npm em sua máquina é necessário clonar o repositório com o seguinte comando:

```bash

$ git clone https://github.com/rafaeldiogo/github-challenge.git
```

## 🚀 Como executar o projeto

### Sem Docker

Primeiramente é necessário instalar todas as dependências do projeto usando npm:

```bash
$ npm i
```

Para executar o projeto, em modo de desenvolvimento, use o seguinte comando:

```bash
$ npm run dev
```

## 🛠️ Como construir o projeto

Como construir o projeto:

```bash
$ npm run build
```

### Com Docker

## 🛠️ Como construir a imagem Docker:

```bash
$ docker build . -t github-challenge
```

Para executar o container

```bash
$ docker run -p 8080:8080 github-challenge
```

## 📦Estrutura de pastas

- `src/__tests__`: Testes dos componentes.

- `src/components`: Este diretório contém componentes reutilizáveis ​​que podem ser usados ​​em várias partes da aplicação.

- `src/hooks`: Utilizado custom hook para fazer requisição para cada página.

- `src/pages`: Componentes específicos da página serão colocados aqui.

- `src/types`: Tipos específicos para esta aplicação serão mantidos aqui.

- `cypress/e2e`: Testes de integração.

- `cypress/fixtures`: Pasta para mock dos JSONs utilizados nos testes de integração.

## 📦 Tools

- [React](https://react.dev/) (v18.2.0)
- [React Router Dom](https://reactrouter.com/) (v6.23.1).
- [Vite](https://vitejs.dev/) (v5.2.0).
- [TailwindCSS](https://tailwindcss.com/) (v3.4.3).
- [Cypress](https://www.cypress.io/) (v13.10.0).
- [Docker](https://www.docker.com/) (v26.1.1).

## 🚀Funcionalidades

- Busca de usuários do GitHub por nome de usuário.
- Exibição dos repositórios do usuário selecionado, ordenados por:
  - Data de criação (do mais antigo para o mais recente).
  - Quantidade de estrelas.
- Cada repositório deve conter:
  - Nome.
  - Descrição.
  - Link para o repositório no GitHub.
- Estilização da pagina.
  - Utilize a tecnologia de sua prefência, css puro, tailwind, bootstrap e etc.

 ## 🚀Requisitos

  - Utilização da [API do GitHub](https://docs.github.com/en/rest/users?apiVersion=2022-11-28) para buscar usuários e repositórios.
- Utilização da biblioteca React
- Responsividade: o site deve ser amigável em dispositivos de diferentes tamanhos.
- Utilização de Docker para empacotar a aplicação.
- Implementação de testes unitários.
- Implementação de testes de integração utilizando Cypress.
- Utilização de git para controle de versionamento de código.
- Manter código legível (clean code)
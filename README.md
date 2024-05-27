# Avaliação Sprint 2-3 -> Programa de Bolsas Compass UOL / AWS - ABRIL/2024

<p align="center">
 <a href="#-descrição">Descrição</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-como-usar-a-aplicação">Uso</a> • 
 <a href="#-desenvolvimento">Desenvolvimento</a> •
 <a href="#-tecnologias-utilizadas">Tecnologias</a> •
 <a href="#-instalação-em-caso-de-uso-local">Instalação</a> •
 <a href="#-arquitetura-aws">Arquitetura</a> •
 <a href="#-dificuldades">Dificuldades</a> •
 <a href="#-autores">Autores</a>
</p>

## 📜 Descrição

Este é um projeto de uma aplicação web construída com Node.js e Express, que permite aos usuários buscar imagens aleatórias de raças de cães. A aplicação utiliza a API Dog CEO para obter as imagens das raças de cães. O projeto também está configurado para ser executado em um container Docker usando Docker Compose e esta hospeado na AWS C2.
      
<img src="assets/image.png" height="400" >

## ⚙️ Funcionalidades

- [x] **Buscar Imagens de Raças de Cães:** O usuário pode digitar ou selecionar uma raça de cão e obter uma imagem aleatória dessa raça.
- [x] **Auto-complete para Raças de Cães:** A aplicação oferece sugestões de raças de cães à medida que o usuário digita, utilizando um elemento <datalist>.
- [x] **Novo Design Responsivo**: Interface otimizada para diferentes dispositivos, com estilos modernos.


## 🧑‍💻 Como usar a Aplicação

**1.Para acesso a aplicação, entre em qualquer um dos links:**

  ```
http://54.209.135.120:3000 
  ```
```
http://44.219.183.152:3000
```
```
http://44.195.193.89:3000
```
```
http://52.7.58.93:3000
```
**2.Após acesso a aplicação, Busque imagens de uma Raça de Cão:**
- Digite ou selecione o nome de uma raça de cão no campo de entrada.
- Clique no botão "Pesquisar".
- Uma imagem aleatória da raça selecionada será exibida.

**3-Obter Nova Imagem da Mesma Raça:**
- Clique no botão "Nova Imagem" (se disponível) para obter outra imagem aleatória da mesma raça.

**4-Verificar Erros:**
- Se a raça não for encontrada, uma mensagem de erro será exibida informando que a raça não está listada.

## 🚀 Desenvolvimento

**📂 Estrutura do projeto**

 ```
├── assets
│   └── image.png                 # imagem usada no Readme
├── src
│   ├── controllers
│   │   ├── dogController.js      # Lógica para buscar imagens de cães
│   │   └── homeController.js     # Lógica para renderizar a página inicial
│   │
│   ├── middlewares
│   │   └── notFound.js           # Middleware para tratamento de erro 404
│   │
│   ├── public
│   │   └── styles.css            # Arquivo de estilos CSS
│   │
│   ├── routes
│   │   └── rotas.js              # Definição das rotas da aplicação
│   │
│   ├── templates
│   │   └── 404.ejs               # Template para página 404
│   │
│   └── views
│       └── index.ejs             # Template EJS para a página inicial
├── app.js                        # Código do servidor Node.js
│
├── docker-compose.yml            # Configuração do Docker Compose
│
├── Dockerfile                    # Configuração do Docker
│
├── package.json                  # Dependências do projeto
│
└── ipackage-lock.json            # Versões exatas das dependências
 ```

## 📲 Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento.
- **Express:** Framework web para Node.js.
- **EJS:** Motor de templates para renderização de páginas HTML.
- **Axios:** Cliente HTTP para fazer requisições à API.
- **Docker:** Para containerização da aplicação.
- **Docker Compose:** Para orquestração de containers Docker.


## 🖥️ Instalação em caso de uso local

**Pré-requisitos**
1. Node.js
2. Docker
3. Docker Compose

**Passos para Instalação**

- **Clone o repositório:**
```
git clone https://github.com/Compass-pb-aws-2024-ABRIL/sprints-2-3-pb-aws-abril.git
cd sprints-2-3-pb-aws-abril
 ```

- **Entre na branch:**
 ```
git checkout grupo-8
 ```
- **Instale as dependências:**
```
npm install
```

- **Build a imagem Docker:**
 ```
docker-compose build
 ```

- **Execute o container Docker:**
 ```
docker-compose up
 ```

- **Acesse a aplicação:**
Abra o navegador e vá para http://localhost:3000

## 🌐 Arquitetura AWS
- O passo a passo realizado para subir a aplicação para a AWS pode ser encontrado em: [Link](https://katfrd.notion.site/ECR-e-EC2-na-AWS-36efd2d1cf5943479d64c2982f3dfb59)
<img src="assets/arquiteturaAWS.png" height="400" >

## 🔐 Dificuldades
- Instalação do Docker: Tivemos um caso de instalação do Docker em uma máquina local onde o kernel da WLS estava corrompido. Isso exigiu a reinstalação do Docker e a correção do kernel, o que atrasou um pouco.
- Configuração da AWS: Configurar a AWS para rodar a aplicação na nuvem apresentou desafios, especialmente na configuração correta do AWS EC2 para permitir o tráfego HTTP e SSH, bem como na gestão de permissões e segurança.

## 👤 Autores
**Katarina Lydia Friedrich**
- | Email | katarinalydia@hotmail.com

**Layon Jose Pedrosa dos Reis**
- | Email | layonjp300@gmail.com

**Leonardo Loureiro de Almeida**
- | Email | leoloureiro44@gmail.com

**Manoella dos Reis Leite**
- | Email | reismanoella@gmail.com

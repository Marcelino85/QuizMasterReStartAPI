# 📦 Backend - Quiz re/Start com Node.js e Express

Este é um projeto de backend desenvolvido com **Node.js** e **Express** para gerenciar rotas básicas e processar questionários para serem enviados pelo frontend.

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)

## 📂 Estrutura do projeto
backend/ 
  ├── app.js 
  ├── package.json 
  ├── .gitignore
  ├── .env 
  └── (...)

## 🔥 Funcionalidades

- `GET /home` – Página inicial.
- `GET /sobre` – Página de informações sobre o projeto ou empresa.
- `GET /contato` – Página com o formulário de contato.
- `POST /contato` – Recebe os dados enviados pelo formulário e processa as informações.

## 🌎 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Marcelino85/QuizMasterReStartAPI.git

```
### 2. Entre no diretório

```bash
cd QuizMasterReStartAPI
```
### 3. Instale as dependências

```bash
npm install
```
### 4. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto e defina suas variáveis conforme necessário.

### 5. Inicie o servidor

```bash
node app.js
```
O servidor estará rodando em:
```bash
http://localhost:3001
```
## ⚙️ Variáveis de ambiente (.env)
Exemplo de variáveis que podem ser usadas:
```bash
PORT=3001
```
## 📬 Exemplo de requisição GET para /questions

```
        {
            "id": 1,
            "pergunta": "Qual serviço da AWS permite automatizar o provisionamento de recursos?",
            "alternativas": [
                "AWS Lambda",
                "AWS CloudFormation",
                "AWS EC2",
                "AWS S3"
            ],
            "respostaCorreta": 1,
            "comentario": "O AWS CloudFormation permite criar e gerenciar recursos de infraestrutura por meio de templates, automatizando o processo de provisionamento."
        },

```
## 📜 Licença
Este projeto está licenciado sob a licença ISC.

## ✍️ Autor
Desenvolvido por [Marcelino Albuquerque].

## 🛠 Melhorias futuras
Implementação mais questões atualizadas.

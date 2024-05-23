const express = require('express');
const rotas = require('./routes/rotas'); // Importa as rotas definidas em 'routes/index.js'
const app = express();
const path = require('path'); // Importa o módulo 'path' para trabalhar com diretórios e caminhos de arquivos

// Middleware para usar as rotas definidas
app.use('/', rotas);

const PORT = 3000;

// Inicia o servidor na porta 3000
app.listen(PORT, () => console.log(`O express está rondando na porta ${PORT}`));

// imprime "hello" em localhost:3000 no navegador 
app.get('/',(req, res)=>{
    res.send("Hello")
});
const express = require('express');
const rotas = require('./src/routes/rotas'); // Importa as rotas definidas em 'routes/index.js'
const app = express();
const path = require('path'); // Importa o módulo 'path' para trabalhar com diretórios e caminhos de arquivos
const notFoundMiddleware = require('./src/middlewares/notFound'); // Importa o middleware de tratamento de erro 404


// Configurações de view engine e múltiplas pastas de views
app.set('views', [path.join(__dirname, 'src','views'), path.join(__dirname, 'src','templates')]); // Define os diretórios de views
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.set('view engine', 'ejs'); // Define 'ejs' como a view engine
app.engine('html', require('ejs').renderFile); // Configura a view engine para renderizar arquivos HTML

// Middleware para usar as rotas definidas
app.use('/', rotas);

// Middleware para tratar erro 404
app.use(notFoundMiddleware);

const PORT = 3000;

// Inicia o servidor na porta 3000
app.listen(PORT, () => console.log(`O servidor está rondando na porta ${PORT}`));


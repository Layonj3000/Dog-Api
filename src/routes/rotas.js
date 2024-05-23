const express = require('express');
const router = express.Router(); // Cria um roteador para gerenciar as rotas

// Define a rota para a página inicial'
router.get("/", homeController.renderHomePage);

// Define a rota para buscar uma raça de cachorro'
router.get("/dog", dogController.getDogByBreed);

module.exports = router; // Exporta o roteador para ser usado em 'app.js'

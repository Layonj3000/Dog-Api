const express = require('express');
const router = express.Router(); // Cria um roteador para gerenciar as rotas

// Define a rota para a página inicial e associa ao método 'renderHomePage' do 'homeController'
router.get("/", homeController.renderHomePage);

module.exports = router; // Exporta o roteador para ser usado em 'app.js'

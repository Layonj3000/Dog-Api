const axios = require("axios"); // Importa o módulo 'axios' para fazer requisições HTTP

// Método para buscar uma imagem de cachorro de uma raça específica
exports.getDogByBreed = async (req, res) => {
    const selectedBreed = req.query.breed; // Obtém a raça selecionada pelo usuário
    const customBreed = req.query.customBreed ? req.query.customBreed.toLowerCase() : ''; // Obtém a raça personalizada (se houver) e converte para minúsculas
    const breed = selectedBreed || customBreed; // Usa a raça selecionada ou a personalizada
    const APIUrl = `https://dog.ceo/api/breed/${breed}/images`; // Monta a URL da API para buscar imagens da raça
    let dog;
    let error = null;
    let breeds = [];

};
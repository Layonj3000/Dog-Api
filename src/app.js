const express = require('express');

const app = express();

const PORT = 3000;

// Inicia o servidor na porta 3000
app.listen(PORT, () => console.log(`O express está rondando na porta ${PORT}`));

// imprime "hello" em localhost:3000 no navegador 
app.get('/',(req, res)=>{
    res.send("Hello")
});
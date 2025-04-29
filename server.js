const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;

    // Resposta simples do bot
    let reply = '';
    if (userMessage.toLowerCase().includes('olá')) {
        reply = 'Olá, sou o Sapo! Como posso te ajudar?';
    } else if (userMessage.toLowerCase().includes('como vai')) {
        reply = 'Estou ótimo, saltitando por aí! E você?';
    } else {
        reply = 'Desculpe, não entendi. Pode perguntar outra coisa?';
    }

    res.json({ reply });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

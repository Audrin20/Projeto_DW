const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('');
});

app.get('/hello/pt',(req, res) => {
    res.send('Olá, Mundo!')
})

app.listen(3000, console.log('servidor rodando na porta: 3000'));
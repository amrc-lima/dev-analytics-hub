const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('API do DevAnalytics Hub está funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
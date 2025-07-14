const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Esta é a nossa rota de teste protegida.
router.get('/test-protected', authMiddleware, (req, res) => {
  res.json({ 
    message: 'Acesso permitido! Seu token é válido.', 
    userId: req.user.userId 
  });
});

// Futuramente, adicionaremos mais rotas aqui (criar, listar projetos, etc.)

module.exports = router;
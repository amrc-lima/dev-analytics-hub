const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  
  const userId = req.user.userId;
  try {
    const result = await db.query('SELECT * FROM projects WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar projetos.' });
  }
});


router.post('/', authMiddleware, async (req, res) => {
  const { project_name } = req.body;
  const userId = req.user.userId;
  try {
    const result = await db.query(
      'INSERT INTO projects (project_name, user_id) VALUES ($1, $2) RETURNING *',
      [project_name, userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar projeto.' });
  }
});

module.exports = router;
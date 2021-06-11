const express = require('express');
const { getAllQuizzes } = require('../Controllers/quiz.controller');
const router = express.Router();

router.get('/quiz', getAllQuizzes);

module.exports = router;

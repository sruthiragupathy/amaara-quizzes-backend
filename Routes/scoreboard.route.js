const express = require('express');
const {
	postScore,
	getQuizOfAUser,
	getTopFiveScores,
} = require('../Controllers/scoreboard.controller');
const { isAuthorized } = require('../middleware/middleware');
const router = express.Router();

router.post('/scoreboard', isAuthorized, postScore);
router.get('/scoreboard', isAuthorized, getQuizOfAUser);
router.get('/leaderboard', getTopFiveScores);

module.exports = router;

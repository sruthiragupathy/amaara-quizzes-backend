const Scoreboard = require('../Models/scoreboard.model');

const postScore = async (req, res) => {
	const { userId, quizId, score } = req.body;
	try {
		const findQuiz = await Scoreboard.findOne({ userId, quizId });
		if (findQuiz) {
			if (findQuiz.numberOfAttempts < 3) {
				await Scoreboard.findOneAndUpdate(
					{ userId, quizId },
					{ score, numberOfAttempts: findQuiz.numberOfAttempts + 1 },
				);
			} else {
				throw new Error(
					'Uh oh! You have reached the maximum limit for this Quiz',
				);
			}
		} else {
			const newScore = new Scoreboard({
				quizId,
				userId,
				numberOfAttempts: 1,
				score,
			});
			await newScore.save();
		}
		const attemptedQuizScores = await Scoreboard.find({ userId })
			.populate({ path: 'userId' })
			.populate({ path: 'quizId' });
		res.json({ attemptedQuizScores });
	} catch (error) {
		console.error({ error });
		res.status(201).json({ error: error.message });
	}
};

const getQuizOfAUser = async (req, res) => {
	const { userId } = req;
	try {
		const attemptedQuizScores = await Scoreboard.find({ userId })
			.populate({ path: 'userId' })
			.populate({ path: 'quizId' });
		res.json({ attemptedQuizScores });
	} catch (error) {
		console.error({ error });
		res.status(401).json({ error: error.message });
	}
};

const getTopFiveScores = async (req, res) => {
	try {
		const leaderboard = await Scoreboard.find()
			.sort({ numberOfAttempts: 1, score: -1 })
			.limit(5)
			.populate({ path: 'userId' })
			.populate({ path: 'quizId' });
		res.json({ leaderboard });
	} catch (error) {
		console.error({ error });
		res.status(404).json({ error: error.message });
	}
};

module.exports = { postScore, getQuizOfAUser, getTopFiveScores };

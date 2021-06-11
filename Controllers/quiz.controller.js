const Quiz = require('../Models/quiz.model');

const getAllQuizzes = async (req, res) => {
	try {
		const allQuizzes = await Quiz.find();
		return res.json({ quiz: allQuizzes });
	} catch (error) {
		console.error({ error });
		res.status(401).json({ error: error.message });
	}
};

module.exports = { getAllQuizzes };

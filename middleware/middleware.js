const isAuthorized = (req, res, next) => {
	const token = req.headers.authorization;
	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		req.userId = decoded.userId;
		next();
	} catch (error) {
		res
			.status(401)
			.json({ message: 'Unauthorised access, please add the token' });
	}
};

module.exports = { isAuthorized };

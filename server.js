require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const connectMongoDb = require('./connectMongoDb');

const quizRoutes = require('./Routes/quiz.route');
const userRoutes = require('./Routes/user.route');
const scoreboardRoutes = require('./Routes/scoreboard.route');

//Middlewares
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectMongoDb();

const PORT = process.env.PORT || 3000;

//Routes
app.use('/api', quizRoutes);
app.use('/api', userRoutes);
app.use('/api', scoreboardRoutes);

app.listen(PORT, () => {
	console.log('Server running at port ' + PORT);
});

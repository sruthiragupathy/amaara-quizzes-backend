require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const connectMongoDb = require('./connectMongoDb');

const quizRoutes = require('./Routes/quiz.route');
const quizModel = require('./Models/quiz.model');
const { quizDatabase } = require('./database');

//Middlewares
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectMongoDb();

const PORT = process.env.PORT || 3000;

//Routes
app.use('/api', quizRoutes);

app.listen(PORT, () => {
	console.log('Server running at port ' + PORT);
});

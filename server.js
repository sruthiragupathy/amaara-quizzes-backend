require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const connectMongoDb = require('./connectMongoDb');

//Middlewares
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectMongoDb();

const PORT = process.env.PORT || 3000;

//Routes

app.listen(PORT, () => {
	console.log('Server running at port ' + PORT);
});

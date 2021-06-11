const express = require('express');
const { signupUser, loginUser, g } = require('../controllers/user.controller');
const { isAuthorized } = require('../middleware/middleware');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

module.exports = router;

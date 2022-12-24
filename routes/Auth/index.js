const {Router} = require('express');

const login = require('../../controllers/Auth/login');
const register = require('../../controllers/Auth/register');

const router = Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;

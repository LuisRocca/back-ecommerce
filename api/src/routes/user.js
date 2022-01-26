const { Router } = require('express');
const { userCreate } = require('../Controllers/User/userCreate');
const { userLogin } = require('../Controllers/User/userLogin');


const router = Router();

router.post('/', userCreate); // crear usuarios

router.post('/login', userLogin)

module.exports = router;
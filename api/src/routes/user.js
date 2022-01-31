const { Router } = require('express');
const { userCreate } = require('../Controllers/User/userCreate');
const { userLogin } = require('../Controllers/User/userLogin');

 
const router = Router();

router.post('/', userCreate);
router.post('/login', userLogin);

module.exports = router;
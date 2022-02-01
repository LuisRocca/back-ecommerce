const { Router } = require('express');
const { userCreate } = require('../Controllers/User/userCreate');
const { userLogin } = require('../Controllers/User/userLogin');
const { userAll } = require('../Controllers/User/userAll')

 
const router = Router();

router.get('/', userAll);
router.post('/', userCreate);
router.post('/login', userLogin);

module.exports = router;
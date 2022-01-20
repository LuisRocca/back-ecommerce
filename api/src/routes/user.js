const { Router } = require('express');
const { userCreate } = require('../Controllers/User/userCreate');


const router = Router();

router.post('/', userCreate);

module.exports = router;
const { Router } = require('express');
const { categoryAll } = require('../Controllers/Category/categoryAll');


const router = Router();

router.get('/', categoryAll);

module.exports = router
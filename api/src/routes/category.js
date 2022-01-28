const { Router } = require('express');
const { categoryAll } = require('../Controllers/Category/categoryAll');
const { categoryCreate } = require('../Controllers/Category/categoryCreate');
const { categoryDelete } = require('../Controllers/Category/categoryDelete');


const router = Router();

router.get('/', categoryAll);
router.post('/create/', categoryCreate);
router.delete('/delete/', categoryDelete);

module.exports = router
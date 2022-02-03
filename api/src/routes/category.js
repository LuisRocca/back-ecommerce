const { Router } = require('express');
const { categoryAll } = require('../Controllers/Category/categoryAll');
const { categoryCreate } = require('../Controllers/Category/categoryCreate');
const { categoryDelete } = require('../Controllers/Category/categoryDelete');
const { categoryId } = require('../Controllers/Category/categoryId');

const router = Router();

router.get('/', categoryAll);
router.get('/id/:idCategory', categoryId);
router.post('/create/', categoryCreate);
router.delete('/delete/', categoryDelete);

module.exports = router
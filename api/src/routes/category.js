const { Router } = require('express');
const { categoryAll } = require('../Controllers/Category/categoryAll');
const { categoryCreate } = require('../Controllers/Category/categoryCreate');
const { categoryDelete } = require('../Controllers/Category/categoryDelete');
const { editCategory } = require('../Controllers/Category/editCategory');


const router = Router();

router.get('/', categoryAll);
router.post('/create/', categoryCreate);
router.delete('/delete/', categoryDelete);
router.put('/edit/:id', editCategory);

module.exports = router
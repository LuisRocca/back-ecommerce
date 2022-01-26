const { Router } = require('express');
const { productsByCategory } = require('../Controllers/Products/productsByCategory');
const { productdById } = require('../Controllers/Products/productdById');
const { productsAll } = require('../Controllers/Products/productsAll');

const router = Router();

router.get('/', productsAll);
router.get('/detail/:id', productdById);
router.get('/category/:name', productsByCategory);

module.exports = router
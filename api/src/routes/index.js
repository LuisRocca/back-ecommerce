const { Router } = require('express');

const user = require('./user');
const review = require('./review');
const productApple = require('./products.js');
const admin = require('./admin.js');
<<<<<<< HEAD
const category = require('./category');
const mercadoPago = require('./mercadoPago');
=======
const order = require('./order.js')
>>>>>>> 4e692d0fb131f4d986c2f0a08a122cf0c61abd57


const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('index')
});


router.use('/review', review);
router.use('/user', user);
router.use('/products', productApple);
router.use('/admin', admin);
<<<<<<< HEAD
router.use('/category', category);
router.use('/mercadopago', mercadoPago);
=======
router.use('/order', order)
>>>>>>> 4e692d0fb131f4d986c2f0a08a122cf0c61abd57


module.exports = router;

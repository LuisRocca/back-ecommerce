const { Router } = require('express');

const user = require('./user');
const review = require('./review');
const productApple = require('./products.js');
const admin = require('./admin.js');
const category = require('./category');
const mercadoPago = require('./mercadoPago');
const order = require('./order.js')



const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('index')
    
});


router.use('/review', review);
router.use('/user', user);
router.use('/products', productApple);
router.use('/admin', admin);
router.use('/category', category);
router.use('/mercadopago', mercadoPago);
router.use('/order', order);



module.exports = router;

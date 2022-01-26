const { Router } = require('express');

const user = require('./user');
const review = require('./review');
const productApple = require('./products.js');


const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('index')
});


router.use('/review', review);
router.use('/user', user);
router.use('/products', productApple);


module.exports = router;

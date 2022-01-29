const { Router } = require('express');
const { mercadoPagoController } = require('../Controllers/MercadoPago/mercadoPagoController');


const router = Router();

router.post('/sale/', mercadoPagoController);

module.exports = router
const { Router } = require('express');
const { mercadoPagoController } = require('../Controllers/MercadoPago/mercadoPagoController');
const { sendMail } = require('../Controllers/MercadoPago/sendMail');


const router = Router();

router.post('/sale/', mercadoPagoController);
router.post('/sendemail',sendMail);

module.exports = router
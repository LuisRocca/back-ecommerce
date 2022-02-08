const { Router } = require('express');
const { mercadoPagoController } = require('../Controllers/MercadoPago/mercadoPagoController');
const { sendMail } = require('../Controllers/MercadoPago/sendMail');
const { callReception } = require('../Controllers/MercadoPago/callReception');

const router = Router();

router.post('/sale/', mercadoPagoController);
router.post('/sendemail',sendMail);
router.post('/callreception',callReception);

module.exports = router
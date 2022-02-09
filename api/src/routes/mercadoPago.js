const { Router } = require('express');
const { mercadoPagoController } = require('../Controllers/MercadoPago/mercadoPagoController');
const { sendMail } = require('../Controllers/MercadoPago/sendMail');
const { callReception } = require('../Controllers/MercadoPago/callReception');
const { sendNotification } = require('../Controllers/MercadoPago/sendNotification');

const router = Router();

router.post('/sale/', mercadoPagoController);
router.post('/sendemail',sendMail);
router.post('/sendnotification', sendNotification);
router.post('/callreception',callReception);

module.exports = router
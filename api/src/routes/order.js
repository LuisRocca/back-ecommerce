const { Router } = require('express');
const { createOrder } = require('../Controllers/Order/createOrder');
const { getOrder } = require('../Controllers/Order/getOrder');
const { getOrderUser } = require('../Controllers/Order/getOrderUser');
const { getOpenOrders } = require('../Controllers/Order/getOpenOrders');
const { editOrder } = require('../Controllers/Order/editOrder')


const router = Router();

// ruta de creacion de ordenes

router.post('/:idUser', createOrder);

// ruta de obtencion de ordenes

router.get('/', getOrder);

// ruta de obtencion de ordenes de un usuario

router.get('/:idUser', getOrderUser)

// ruta de obtencion ordenes abiertas de un usuario

router.get('/user/:idUser', getOpenOrders)

// ruta de modificacion de carrito de la orden

router.put(`/:idUser`, editOrder)



module.exports = router; 
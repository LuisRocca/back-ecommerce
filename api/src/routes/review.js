const { Router } = require('express');
const { reviewByCategory } = require('../Controllers/Review/reviewByCategory');
const { reviewEditByUser } = require('../Controllers/Review/reviewEditByUser');
const {reviewCreateByUser} = require('../Controllers/Review/reviewCreateByUser');

const router = Router();

// ------------------ esta ruta es para CREAR REVIEW 

router.post('/products/:idProduct/user/:idUser', reviewCreateByUser);

// -------------------- Ruta PUT para modificar las review del usuario ya que solo hay uno por usuario

router.put( '/products/:idProduct/user/:idUser', reviewEditByUser);

// ------------------ Ruta get para tarer todas las review del usurio

router.get('/products/:idProduct', reviewByCategory);

module.exports = router; 
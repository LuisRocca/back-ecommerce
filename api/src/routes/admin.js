const { Router } = require('express');
const { createProduct } = require('../Controllers/Admin/createProduct');


const router = Router();

// ------------------ esta ruta es para CREAR productos

router.post('/create', createProduct);

// -------------------- Ruta PUT para modificar las review del usuario ya que solo hay uno por usuario



// ------------------ Ruta get para tarer todas las review del usurio



module.exports = router; 
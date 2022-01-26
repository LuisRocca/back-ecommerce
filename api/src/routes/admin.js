const { Router } = require('express');
const { createProduct } = require('../Controllers/Admin/createProduct');
const { deleteProduct } = require('../Controllers/Admin/deleteProduct');


const router = Router();

// ------------------ esta ruta es para CREAR productos

router.post('/create', createProduct);

// -------------------- Ruta PUT para modificar las review del usuario ya que solo hay uno por usuario



// ------------------ Ruta delete para eliminar productos

router.delete('/delete/:id', deleteProduct);

module.exports = router; 
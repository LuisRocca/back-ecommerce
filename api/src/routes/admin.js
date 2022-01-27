const { Router } = require('express');
const { createProduct } = require('../Controllers/Admin/createProduct');
const { deleteProduct } = require('../Controllers/Admin/deleteProduct');
const { editProduct } = require('../Controllers/Admin/editProduct');


const router = Router();

// ------------------ esta ruta es para CREAR productos

router.post('/create', createProduct);

// -------------------- Ruta PUT para modificar un productos

router.put('/edit/:id', editProduct);


// ------------------ Ruta delete para eliminar productos

router.delete('/delete', deleteProduct);

module.exports = router; 
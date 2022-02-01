const { Router } = require('express');
const { createProduct } = require('../Controllers/Admin/createProduct');
const { deleteProduct } = require('../Controllers/Admin/deleteProduct');
const { editProduct } = require('../Controllers/Admin/editProduct');
const { userDelete } = require('../Controllers/Admin/userDelete');
const { userEdit } = require('../Controllers/Admin/userEdit');


const router = Router();

// ------------------ esta ruta es para CREAR productos

router.post('/create', createProduct);

// -------------------- Ruta PUT para modificar un productos

router.put('/edit/:id', editProduct);


// ------------------ Ruta delete para eliminar productos

router.delete('/delete/:id', deleteProduct);

router.delete('/user/delete/:id', userDelete);

router.put('/user/edit/:id', userEdit);

module.exports = router; 
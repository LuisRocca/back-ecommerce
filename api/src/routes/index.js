const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productApple = require('./products.js');
// const dogsRouter = require('./dogs');
// const temperamentRouter = require('./temperament');
<<<<<<< HEAD
const {showAll} = require('../methods/showAll.js')
=======
// const {showAll} = require('../methods/index.js')
>>>>>>> 3e9fc2bc09754e816791f6f68a0e8845e2edc823

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req, res) => {
    res.status(200).send('index')
});

router.use('/products', productApple);
// router.use('/temperament', temperamentRouter);
// router.use('/dog', dogRouter);

module.exports = router;

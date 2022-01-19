const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const dogRouter = require('./dog');
const user = require('./user');
const review = require('./review');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req, res) => {
    res.status(200).send('index')
});

// router.use('/dogs', dogsRouter);
router.use('/review', review);
router.use('/user', user);

module.exports = router;

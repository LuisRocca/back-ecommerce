const { Router } = require('express');
const { addfavorites } = require('../Controllers/Favorites/addfavorites');

 
const router = Router();

router.post('/allFavorites', addfavorites);

module.exports = router;
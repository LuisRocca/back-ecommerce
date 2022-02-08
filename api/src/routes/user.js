const { Router } = require('express');
const { userCreate } = require('../Controllers/User/userCreate');
const { userLogin } = require('../Controllers/User/userLogin');
const { userAll } = require('../Controllers/User/userAll');
const {getUser} = require('../Controllers/User/getUser');
const {editUser} = require('../Controllers/User/editUser');
const {resetPassword} = require('../Controllers/User/resetPassword');

 
const router = Router();

router.get('/', userAll);

router.post('/', userCreate);

router.post('/login', userLogin);

router.get('/:idUser', getUser);

router.put('/:idUser', editUser);

router.put('/', resetPassword);

module.exports = router;
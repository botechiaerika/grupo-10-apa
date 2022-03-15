const usersController = require('../controllers/usersControllers.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION EMPRESAS  */
router.get('/usuarios')
router.get('/crearCuenta', usersController.cadastroUsuarios)

module.exports = router
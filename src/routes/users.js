const { Router } = require('express');
const router = Router();
const userController =require('../controllers/userController');

router.get('/', userController.listarUsuarios)
router.post('/crearUsuario', userController.crearusuario);
router.put('/editarUsuario/:id', userController.editarUsuario);
router.delete('/eliminarUsuario/:id', userController.borrarUsuario);

module.exports = router;
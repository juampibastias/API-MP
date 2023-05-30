const {Router} = require('express');
const {PagarProducto} = require('../Controllers/notificacioneWebhooks');
const router = Router();
router.post('/notificaciones', PagarProducto);

module.exports = router 

const {Router} = require('express');
const {PagarProducto} = require('../Controllers/notificacioneWebhooks');
const router = Router();
router.post('/notificacion', PagarProducto);

module.exports = router 
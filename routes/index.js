const express = require('express');
const router = express.Router();


const PaymentController = require('../Controllers/PaymentController');
const PaymentService = require('../Services/PaymentService');
const PaymentInstance = new PaymentController(new PaymentService());


/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json({
    "/payment": "generates a payment link" 
  })

});
router.get('/payment', function(req, res, next) {
  PaymentInstance.getPaymentLink(req, res)
 });

router.post('/payment', async function(req, res, next) {
  PaymentInstance.getPaymentLink(req.body.data, res)
 });

module.exports = router;

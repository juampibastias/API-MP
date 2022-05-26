const axios = require("axios"); 
const req = require("express/lib/request");

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {
      payer_email: "test_user_11567634@testuser.com",
      items: [
        {
          title: req.body.title,
          quantity: req.body.quantity,
          unit_price: req.body.price
        },
      ],
      back_urls: {
        success: "https://www.success.com",
        failure: "https://www.failure.com",
        pending: "https://www.pending.com",
      },
    };
    
      const payment = await axios.post(url, body, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
    return payment.data;
  }
}

module.exports = PaymentService;

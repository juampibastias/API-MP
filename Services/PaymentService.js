const axios = require("axios");
const { redirect } = require("express/lib/response");

class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {

      payer_email: "test_user_11567634@testuser.com",
      items: [
        {
          title: req.title,
          quantity: req.quantity,
          unit_price: req.price
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
    })

    .then(function(response){
      console.log(response.data.init_point)
      redirect(response.data.init_point)
    })
    
    //return payment.data;
  }
}

module.exports = PaymentService;

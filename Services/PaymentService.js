const axios = require("axios");


class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {

      payer_email: "test_user_11567634@testuser.com",
      items: req,
      
      
      back_urls: {
        success: "http://localhost:3000/profile",
        failure: "http://localhost:3000/failurePage",
        pending: "http://localhost:3000/pendingPage", 
      },
    };
    
    const payment = await axios.post(url, body, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })

    return payment.data;

    // console.log("esto es el payment Service part 1: " + payment.data.init_point);
    // return payment.data.init_point;
  }
}

module.exports = PaymentService;
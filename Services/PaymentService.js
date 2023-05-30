const axios = require("axios");


class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {

      items: req,
      
      
      back_urls: {
        success: "https://www.access.com.ar/profile",
        failure: "https://www.access.com.ar/failurePage",
        pending: "https://www.access.com.ar/pendingPage",
      },
    };
    
    const payment = await axios.post(url, body, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })

    return payment.data;
  }
}

module.exports = PaymentService;

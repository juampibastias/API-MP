const PagarProducto = async (req,res) =>{
    console.log(req.body);
    res.status(200).send('Funciona Webhooks');;
}

module.exports = {PagarProducto}
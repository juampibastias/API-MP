const PagarProducto = async (req,res) =>{
    console.log(req.body);
    res.status(200).send('OK');;
}

module.exports = {PagarProducto}

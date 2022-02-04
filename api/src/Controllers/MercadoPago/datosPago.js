
const { PROD_ACCESS_TOKEN } = process.env;
const axios = require('axios');
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: PROD_ACCESS_TOKEN
});


const datosPago = async(req, res, next)=>{
    const { id } = req;
  
    try{
        const datosCompra = axios(`https://api.mercadopago.com/v1/payments/${id}?access_token=${PROD_ACCESS_TOKEN}`)
        //return res.status(200).json(datosCompra)
    }catch(err){
        next(err)
    }
};
  
module.exports = {
    datosPago
}
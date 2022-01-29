const { PROD_ACCESS_TOKEN } = process.env;
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: PROD_ACCESS_TOKEN
});


const mercadoPagoController = async(req, res, next)=>{
  
  // Crea un objeto de preferencia
  var preference = {
    items: [
        { title: 'Mi producto',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: 75.56 },
    { title: 'Mi producto 2',
        quantity: 2,
        currency_id: 'ARS',
        unit_price: 96.56 }
    ]
  }  
  mercadopago.preferences
  .create(preference)
  .then(function (response) {
    res.status(200).json(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};
  
  module.exports = {
    mercadoPagoController
  }
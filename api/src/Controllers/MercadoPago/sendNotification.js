const {USER, PASS, PROD_ACCESS_TOKEN} = process.env;
const nodemailer = require('nodemailer');
const axios = require('axios');

const sendNotification = async(req, res, next)=>{
    const { name, surname, identification, email, phone, address } = req.body;
    try{

        contentHTML = `
            <h1> NUEVA COMPRA </h1>
            <p> Tienes una nueva compra para despachar.</p>
            <h3>Datos del comprador</h3>
            <ul>
                <li>Nombre: ${name} ${surname} </li>
                <li>Documento: ${identification.type} ${identification.number} </li>
                <li>Email: ${email} </li>
                <li>Telefono: ${phone.area_code}-${phone.number} </li>
            </ul>
            <h3>Domicilio de entrega</h3>
            <ul>
                <li>Calle: ${address.street_name}</li>
                <li>nro: ${address.street_number}</li>
                <li>C.P.: ${address.zip_code}</li>
            </ul>
        `;
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 25,
            auth: {
                user: USER,
                pass: PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const info = await transporter.sendMail({
            from: `'Igroup Ventas' <${USER}>`,
            to: `${USER}`,
            subject: 'Notificacion de Venta',
            html: contentHTML
        });
        return res.status(200).json(info.id)
    }catch(err){
        next(err)
    };
  };
  
module.exports = {
    sendNotification
};
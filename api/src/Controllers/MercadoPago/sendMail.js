const nodemailer = require('nodemailer');
const {USER, PASS} = process.env;

const sendMail = async(req, res, next)=>{
    const { name, email, message } = req.body;
  
    try{
        contentHTML = `
            <h1>User Information</h1>
            <ul>
                <li>Username: ${name}</li>
                <li>Email: ${email}</li>
            </ul>
            <p>${message}</p>          
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
            to: USER,
            subject: 'Contacto de wed Igroup',
            html: contentHTML
        });
        return res.status(200).json(info)
    }catch(err){
        next(err)
      }
  };
    
module.exports = {
    sendMail
};
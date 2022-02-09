const { conn } = require("../../db");
const { User } = conn.models;
const nodemailer = require('nodemailer');
const {USER, PASS} = process.env;

const resetPassword = async (req,res,next) => {
    const { email } = req.body;
    const a = new Date();
    const b = a.getDate();
    const pass = `${email.charCodeAt(1)*b}${email.charCodeAt(3)}`
    //pass = parseInt(pass)
    try {
        const user = await User.findOne({where:{email:email}})
        if (user) {
            await user.update({
                password: pass,
            })
            contentHTML = `
            <h1>Restablecer Contraseña</h1>
            <ul>
                <li>Email: ${email}</li>
                <li>Nueva clave: ${pass}</li>
            </ul>
            <p>Se a generado una contraseña alternativa, por favor una vez ingresado vuelva a cambiarla</p>          
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
            to: email,
            subject: 'Restablecer Contraseña',
            html: contentHTML
        });
        return res.status(200).json(info)
        } else {
            res.status(400).json({msg: 'User not found'})
        }
    } catch(err){
        next(err)
    }

}

module.exports = {
    resetPassword
};
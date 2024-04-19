    const sgMail = require('@sendgrid/mail')
    require('dotenv').config();


    exports.handler = async (event,context) => {
        
        const sendgrid_key = process.env.SENDGRID_KEY  
        sgMail.setApiKey(sendgrid_key)
        const msg1 = {
        to: 'tpcagencia@gmail.com', // Change to your recipient
        from: 'artevillot@em8051.gabrielvillot.com.ar', // Change to your verified sender
        subject: 'Nueva consulta',
        text: 'Alejandra consulto por 2 de tus cuadros',

        }
        const msg2 = {
            to: 'emiliomarchi.dev@gmail.com', // Change to your recipient
            from: 'artevillot@em8051.gabrielvillot.com.ar', // Change to your verified sender
            subject: 'Has recibido una nueva consulta por tus cuadros',
            text: 'Ya recibimos tu consulta, pronto nos estaremos comunicando',
    
            }
        
        const sendMail = async (msg) => {

            try{
                await sgMail.send(msg)
                .then((res)=>{
                    console.log('mensaje enviado', res)
                })
            }catch(error){
                console.log(error)
                if(error.response){
                    console.log(error.response.body)
                }
            }
        }
        sendMail(msg1)
        sendMail(msg2)
        return {
            body: JSON.stringify({msj:'sendgrid'}),
            statusCode:200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
        },
        }
    }
require('dotenv').config();

exports.handler = async (event,context) => {
    console.log(process.env.SENDGRID_KEY)

    const msj = {msj:'Otro mensaje, pero como lo guardo en el frontend'}
    return {
        body: JSON.stringify(msj),
        statusCode:200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
    },
    }
}
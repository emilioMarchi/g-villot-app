const { MongoClient } = require('mongodb');
require('dotenv').config();

async function obtenerDatosDeColeccion() {
    const uri = 'mongodb+srv://villot:Oilimenmynm8891@cluster0.tobiw9j.mongodb.net/';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db(); // No necesitas especificar la base de datos aquí
        const collection = database.collection('default_collection'); // Nombre predeterminado de la colección
        const datos = await collection.find({}).toArray();
        return datos;
    } finally {
        await client.close();
    }
}
async function agregarObjetoAColeccion(objeto) {
    const uri = 'mongodb+srv://villot:Oilimenmynm8891@cluster0.tobiw9j.mongodb.net/';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db(); // No necesitas especificar la base de datos aquí
        const collection = database.collection('default_collection'); // Puedes especificar un nombre predeterminado para la colección
        const result = await collection.insertOne(objeto);
        return result;
    } finally {
        await client.close();
    }
}

exports.handler = async (event, context) => {
    try {
        const objetoAGuardar = { ejemplo: "Este es un objeto de ejemplo" }; // Objeto que deseas agregar a la colección
        const res = await obtenerDatosDeColeccion()
        
        return {
            statusCode: 200,
            body: JSON.stringify(res),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        };
    } catch (error) {
        console.error("Error al agregar objeto a la colección en MongoDB Atlas:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error interno del servidor" }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        };
    }
};

exports.handler = async (event,context) => {
    const data = {msj:"otra cosa"}

    console.log(event)

    return {
        statusCode:200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
    },
        msj: JSON.stringify(data)
    }
}
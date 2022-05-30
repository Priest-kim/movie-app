exports.handler = async function(event, context) {
    return {
        statusCode : 200,
        body: JSON.stringify({
            name: "JADEN",
            age: 30,
            email : "doqntlrdl123@gmail.com"
        })
    }
}
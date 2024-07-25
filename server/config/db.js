const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODBURL)
        console.log(`mongodb is connected successfully ${connect.connection.host}`)
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = connectDB
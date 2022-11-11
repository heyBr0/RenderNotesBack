const mongoose = require("mongoose")

const ConnectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (err) {
        console.log(err);
    }
}

module.exports = ConnectDB
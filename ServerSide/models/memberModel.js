const mongoose = require("mongoose")

const memberSchema = new mongoose.Schema({

    name: String,
    email: String,
    city: String

})

module.exports = new mongoose.model("member", memberSchema)
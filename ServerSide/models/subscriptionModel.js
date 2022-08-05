const mongoose = require("mongoose")

const subscriptionSchema = new mongoose.Schema({

    movieID: String,
    memberId: String,
    date:Date

})

module.exports = new mongoose.model("subscription", subscriptionSchema)
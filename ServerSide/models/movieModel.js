const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({

    name: String,
    premieredYear: String,
    genres:[String],
    pictureUrl:String


})

module.exports = new mongoose.model("movie", movieSchema)
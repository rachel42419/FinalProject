const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/finalMoviesDB", () => {
   console.log("Connect to mongo DB")
})
const express = require("express")
const app = express()
const cors = require("cors")

const authRouter = require("./routes/authRouer")
const userRouter = require("./routes/userRouter")
const movieRouter = require("./routes/movieRouter")
const memberRouter = require("./routes/memberRouter")
const subscriptionRouter = require("./routes/subscriptionRouter")

app.use(express.json())
app.use(cors())

require("./configs/database")

app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/movies", movieRouter)
app.use("/members", memberRouter)
app.use("/subscriptions", subscriptionRouter)



app.listen(8000, () => {
   console.log("Listen to port 8000")
})
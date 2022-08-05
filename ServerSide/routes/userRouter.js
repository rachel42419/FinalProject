const express = require("express")
const app = express()
const route = express.Router()

const userBl = require("../bl/userBl")


route.get("/", async (req, res) => {

    try {


        return res.status(200).json(await userBl.getUsers())

    } catch (e) {

        return res.status(400).json(e)
    }

})



route.post("/", async (req, res) => {

    try {

        let user = req.body
        return res.status(200).json(await userBl.addUser(user))

    } catch (e) {

        return res.status(400).json(e)

    }

})

module.exports = route


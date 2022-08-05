const express = require("express")
const app = express()
const route = express.Router()

const userBl = require("../bl/userBl")



route.post("/", async (req, res) => {

    try {

        let user = req.body
        let resp = await userBl.auth(user)

        if (resp) {

            return res.status(200).json(resp)
        }

        else {

            return res.status(200).send({ msg: "Username or password incorrect" })

        }

    } catch (e) {

        return res.status(400).json(e)

    }

})

module.exports = route


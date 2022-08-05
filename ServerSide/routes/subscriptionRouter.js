const express = require("express")
const app = express()
const route = express.Router()

const subscriptionBl = require("../bl/subscriptionBl")




route.get("/", async (req, res) => {

    try {

        return res.status(200).json(await subscriptionBl.getSubscriptions())

    } catch (e) {

        return res.status(400).json(e)
    }

})

route.get("/:id", async (req, res) => {

    try {

        let id = req.params.id

        let resp = await subscriptionBl.getSubscription(id)

        return res.status(200).json(resp)

    } catch (e) {

        return res.status(400).json(e)
    }

})


route.post("/", async (req, res) => {

    try {

        let movie = req.body
        return res.status(200).json(await subscriptionBl.addSubscription(movie))

    } catch (e) {

        return res.status(400).json(e)

    }

})

route.put("/:id", async (req, res) => {

    try {

        let id = req.params.id
        let movie = req.body

        let resp = await subscriptionBl.updateSubscription(id, movie)

        return res.status(200).json(resp)

    } catch (e) {

        return res.status(400).json(e)

    }

})

route.delete("/:id", async (req, res) => {

    try {

        let id = req.params.id

        return res.status(200).json(await subscriptionBl.deleteSubscription(id))

    } catch (e) {

        return res.status(400).json(e)

    }

})

module.exports = route


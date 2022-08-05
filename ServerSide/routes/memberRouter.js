const express = require("express")
const app = express()
const route = express.Router()

const memberBl = require("../bl/memberBl")


const getMembersFromAPI = async (req, res, next) => {

    try {
        await memberBl.getMembersFromAPI()
        next()

    }
    catch (e) {

        return e

    }

}

route.get("/:id", async (req, res) => {

    try {

        let id = req.params.id

        let resp = await memberBl.getMember(id)

        return res.status(200).json(resp)

    } catch (e) {

        return res.status(400).json(e)
    }

})


route.get("/"/*, getMembersFromAPI*/, async (req, res) => {

    try {

        return res.status(200).json(await memberBl.getMembers())

    } catch (e) {

        return res.status(400).json(e)
    }

})

route.get("/:id", async (req, res) => {

    try {

        let id = req.params.id

        let resp = await memberBl.getMember(id)

        return res.status(200).json(resp)

    } catch (e) {

        return res.status(400).json(e)
    }

})





route.post("/", async (req, res) => {

    try {

        let movie = req.body
        return res.status(200).json(await memberBl.addMember(movie))

    } catch (e) {

        return res.status(400).json(e)

    }

})

route.put("/:id", async (req, res) => {

    try {

        let id = req.params.id
        let movie = req.body

        let resp = await memberBl.updateMember(id, movie)
        console.log(resp);
        return res.status(200).json(resp)

    } catch (e) {

        return res.status(400).json(e)

    }

})

route.delete("/:id", async (req, res) => {

    try {

        let id = req.params.id

        return res.status(200).json(await memberBl.deleteMember(id))

    } catch (e) {

        return res.status(400).json(e)

    }

})

module.exports = route


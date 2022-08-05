const express = require("express")
const app = express()
const route = express.Router()

const movieBl = require("../bl/movieBl")


const getMoviesFromAPI = async (req, res, next) => {

    try {

        await movieBl.getMoviesFromAPI()

        next()

    }
    catch (e) {

        return e

    }

}


route.get("/"/*, getMoviesFromAPI*/, async (req, res) => {

    try {

        return res.status(200).json(await movieBl.getMovies())

    } catch (e) {

        return res.status(400).json(e)
    }

})

route.get("/:id", async (req, res) => {

    try {

        let id = req.params.id

        let resp = await movieBl.getMovie(id)

        return res.status(200).json(resp)

    } catch (e) {

        return res.status(400).json(e)
    }

})



route.post("/", async (req, res) => {

    try {

        let movie = req.body
        return res.status(200).json(await movieBl.addMovie(movie))

    } catch (e) {

        return res.status(400).json(e)

    }

})

route.put("/:id", async (req, res) => {

    try {

        let id = req.params.id
        let movie = req.body

        let resp = await movieBl.updateMovie(id, movie)

        return res.status(200).json(resp)

    } catch (e) {

        return res.status(400).json(e)

    }

})

route.delete("/:id", async (req, res) => {

    try {

        let id = req.params.id

        return res.status(200).json(await movieBl.deleteMovie(id))

    } catch (e) {

        return res.status(400).json(e)

    }

})

module.exports = route


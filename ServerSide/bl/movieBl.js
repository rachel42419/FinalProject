const mongoose = require("mongoose")
const movieModel = require("../models/movieModel")
const movieDal = require("../dal/movieDal")
const subscriptionBl = require("../bl/subscriptionBl")

const axios = require("axios")


const getMoviesFromAPI = async () => {

    try {

        let { data } = await axios.get("https://api.tvmaze.com/shows")


        data.forEach(async (movie) => {


            let obj = {
                name: movie.name,
                premieredYear: movie.premiered,
                genres: movie.genres,
                pictureUrl: movie.image.original
            }

            await movieDal.addMovie(obj)
        })

    }

    catch (e) {
        return e
    }


}

const getMovies = async () => {

    try {


        return await movieDal.getMovies()


    } catch (e) {

        return e

    }

}



const getMovie = async (id) => {

    try {

        return await movieDal.getMovie(id)


    } catch (e) {

        return e

    }

}




const addMovie = async (obj) => {

    try {

        let newMovie = new movieModel({
            name: obj.name,
            premieredYear: obj.premieredYear,
            genres: obj.genres.split(','),
            pictureUrl: obj.pictureUrl

        })

        return await movieDal.addMovie(newMovie)

    } catch (e) {

        return e

    }

}

const updateMovie = async (id, obj) => {

    try {

        return await movieDal.updateMovie(id, {
            name: obj.name,
            premieredYear: obj.premieredYear,
            genres: obj.genres,
            pictureUrl: obj.pictureUrl
        })


    } catch (e) {

        return e

    }

}

const deleteMovie = async (id) => {

    try {

        let resp = await movieDal.deleteMovie(id)

        if (resp) {


            let subscriptions = await subscriptionBl.getSubscriptionsByMovieID(id)
            subscriptions.forEach(s => {
                let r = subscriptionBl.deleteSubscription(s._id)
            })

        }
        return resp


    } catch (e) {

        return e

    }

}

module.exports = { getMovies, getMovie, addMovie, updateMovie, deleteMovie, getMoviesFromAPI }
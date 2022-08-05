const mongoose = require("mongoose")
const movieModel = require("../models/movieModel")

const getMovies = () => {

    return new Promise(((resolve, reject) => {

        movieModel.find({}, (err, data) => {

            if (err) {
                reject(err)

            }
            else {

                resolve(data)

            }



        })

    }))

}

const getMovie = (id) => {

    return new Promise(((resolve, reject) => {

        movieModel.findById(id, (err, data) => {

            if (err) {
                reject(err)

            }
            else {
                resolve(data)

            }

        })

    }))

}

const addMovie = (obj) => {

    return new Promise(((resolve, reject) => {

        obj.save((err) => {

            if (err) {
                reject(err)

            }
            else {

                resolve(obj)

            }
        })

    }))


}

const updateMovie = (id, obj) => {

    return new Promise(((resolve, reject) => {

        movieModel.findByIdAndUpdate(id, obj, (err) => {

            if (err) {
                reject(err)

            }

            else {
                resolve(movieModel.findById(id))

            }

        })

    }))

}

const deleteMovie = (id) => {

    return new Promise(((resolve, reject) => {

        movieModel.findByIdAndDelete(id, (err) => {

            if (err) {
                reject(err)

            }
            else {
                resolve({})

            }

        })

    }))

}

module.exports = { getMovies, getMovie, addMovie, updateMovie, deleteMovie }


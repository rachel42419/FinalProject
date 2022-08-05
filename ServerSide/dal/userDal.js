const mongoose = require("mongoose")
const userModel = require("../models/userModel")

const getUsers = () => {

    return new Promise(((resolve, reject) => {

        userModel.find({}, (err, data) => {

            if (err) {
                reject(err)

            }
            else {

                resolve(data)

            }



        })

    }))

}

const getUser = (id) => {

    return new Promise(((resolve, reject) => {

        userModel.findById(id, (err, data) => {

            if (err) {
                reject(err)

            }
            else {
                resolve(data)

            }

        })

    }))

}

const addUser = (obj) => {

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

const updateUser = (id, obj) => {

    return new Promise(((resolve, reject) => {

        userModel.findByIdAndUpdate(id, obj, (err) => {

            if (err) {
                reject(err)

            }

            else {
                resolve(userModel.findById(id))

            }

        })

    }))

}

const deleteUser = (id) => {

    return new Promise(((resolve, reject) => {

        userModel.findByIdAndDelete(id, (err) => {

            if (err) {
                reject(err)

            }
            else {
                resolve({})

            }

        })

    }))

}

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser }


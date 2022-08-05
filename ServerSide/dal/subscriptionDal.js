const mongoose = require("mongoose")
const subscriptionModel = require("../models/subscriptionModel")

const getSubscriptions = () => {

    return new Promise(((resolve, reject) => {

        subscriptionModel.find({}, (err, data) => {

            if (err) {
                reject(err)

            }
            else {

                resolve(data)

            }



        })

    }))

}

const getSubscription = (id) => {

    return new Promise(((resolve, reject) => {

        subscriptionModel.findById(id, (err, data) => {

            if (err) {
                reject(err)

            }
            else {
                resolve(data)

            }

        })

    }))

}

const getSubscriptionByMemberID = (id) => {

    return new Promise(((resolve, reject) => {

        subscriptionModel.find({ memberId: id }, (err, data) => {

            if (err) {
                reject(err)

            }
            else {
                resolve(data)

            }

        })

    }))

}



const getSubscriptionByMovieID = (id) => {

    return new Promise(((resolve, reject) => {

        subscriptionModel.find({ movieID: id }, (err, data) => {

            if (err) {
                reject(err)

            }
            else {
                resolve(data)

            }

        })

    }))

}


const addSubscription = (obj) => {

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

const updateSubscription = (id, obj) => {

    return new Promise(((resolve, reject) => {

        subscriptionModel.findByIdAndUpdate(id, obj, (err) => {

            if (err) {
                reject(err)

            }

            else {
                resolve(subscriptionModel.findById(id))

            }

        })

    }))

}

const deleteSubscription = (id) => {

    return new Promise(((resolve, reject) => {

        subscriptionModel.findByIdAndDelete(id, (err) => {

            if (err) {
                reject(err)

            }
            else {
                resolve({})

            }

        })

    }))

}

module.exports = { getSubscriptions, getSubscription, addSubscription, updateSubscription, deleteSubscription, getSubscriptionByMemberID, getSubscriptionByMovieID }


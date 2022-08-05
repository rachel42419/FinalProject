const mongoose = require("mongoose")
const subscriptionModel = require("../models/subscriptionModel")
const subscriptionDal = require("../dal/subscriptionDal")



const getSubscriptions = async () => {

    try {
        return await subscriptionDal.getSubscriptions()

    } catch (e) {

        return e

    }

}



const getSubscription = async (id) => {

    try {

        return await subscriptionDal.getSubscription(id)


    } catch (e) {

        return e

    }

}

const getSubscriptionsByMemberID = async (memberId) => {

    try {

        return await subscriptionDal.getSubscriptionByMemberID(memberId)
    } catch (e) {

        return e

    }

}

const getSubscriptionsByMovieID = async (movieId) => {

    try {

        return await subscriptionDal.getSubscriptionByMovieID(movieId)
    } catch (e) {

        return e

    }

}




const addSubscription = async (obj) => {

    try {

        let newSubscription = new subscriptionModel({
            movieID: obj.movieID,
            memberId: obj.memberId,
            date: obj.date

        })


        return await subscriptionDal.addSubscription(newSubscription)



    } catch (e) {

        return e

    }

}

const updateSubscription = async (id, obj) => {

    try {

        return await subscriptionDal.updateSubscription(id, {
            movieID: obj.movieID,
            memberId: obj.memberId,
            date: obj.date
        })


    } catch (e) {

        return e

    }

}

const deleteSubscription = async (id) => {

    try {

        return await subscriptionDal.deleteSubscription(id)


    } catch (e) {

        return e

    }

}

module.exports = { getSubscriptions, getSubscription, addSubscription, updateSubscription, deleteSubscription, getSubscriptionsByMemberID, getSubscriptionsByMovieID }
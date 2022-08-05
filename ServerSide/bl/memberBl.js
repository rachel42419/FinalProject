const mongoose = require("mongoose")
const memberModel = require("../models/memberModel")
const memberDal = require("../dal/memberDal")
const subscriptionBl = require("../bl/subscriptionBl")

const axios = require("axios")



const getMembersFromAPI = async () => {

    try {

        let { data } = await axios.get("https://jsonplaceholder.typicode.com/users")


        data.forEach(async (user) => {


            let obj = {
                name: user.name,
                email: user.email,
                city: user.address.city
            }

            await addMember(obj)
        })

    }

    catch (e) {
        return e
    }


}

const getMembers = async () => {

    try {


        return await memberDal.getMembers()


    } catch (e) {

        return e

    }

}



const getMember = async (id) => {

    try {

        return await memberDal.getMember(id)


    } catch (e) {

        return e

    }

}


const addMember = async (obj) => {

    try {

        let newMovie = new memberModel({
            name: obj.name,
            email: obj.email,
            city: obj.city
        })


        return await memberDal.addMember(newMovie)



    } catch (e) {

        return e

    }

}

const updateMember = async (id, obj) => {

    try {

        return await memberDal.updateMember(id, {
            name: obj.name,
            email: obj.email,
            city: obj.city
        })


    } catch (e) {

        return e

    }

}

const deleteMember = async (id) => {

    try {

        let resp = await memberDal.deleteMember(id)

        if (resp) {


            let subscriptions = await subscriptionBl.getSubscriptionsByMemberID(id)
            subscriptions.forEach(s => {
                let r = subscriptionBl.deleteSubscription(s._id)
            })

        }

        return resp


    } catch (e) {

        return e

    }

}

module.exports = { getMembers, getMember, addMember, updateMember, deleteMember, getMembersFromAPI }
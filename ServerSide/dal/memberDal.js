const mongoose = require("mongoose")
const memberModel = require("../models/memberModel")

const getMembers = () => {

    return new Promise(((resolve, reject) => {

        memberModel.find({}, (err, data) => {

            if (err) {
                reject(err)

            }
            else {

                resolve(data)

            }



        })

    }))

}

const getMember = (id) => {

    return new Promise(((resolve, reject) => {

        memberModel.findById(id, (err, data) => {

            if (err) {
                reject(err)

            }
            else {
                resolve(data)

            }

        })

    }))

}

const addMember = (obj) => {

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

const updateMember = (id, obj) => {

    return new Promise(((resolve, reject) => {

        memberModel.findByIdAndUpdate(id, obj, (err) => {

            if (err) {
                reject(err)

            }

            else {
                resolve(memberModel.findById(id))

            }

        })

    }))

}

const deleteMember = (id) => {

    return new Promise(((resolve, reject) => {

        memberModel.findByIdAndDelete(id, (err) => {

            if (err) {
                reject(err)

            }
            else {
                resolve({})

            }

        })

    }))

}

module.exports = { getMembers, getMember, addMember, updateMember, deleteMember }


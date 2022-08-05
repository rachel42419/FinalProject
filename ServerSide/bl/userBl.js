const mongoose = require("mongoose")
const userModel = require("../models/userModel")
const userDal = require("../dal/userDal")

const getUsers = async () => {

    try {


        return await userDal.getUsers()


    } catch (e) {

        return e

    }

}



const getUser = async (id) => {

    try {

        return await userDal.getUser(id)


    } catch (e) {

        return e

    }

}

const auth = async (obj) => {

    try {


        let users = await userDal.getUsers()
        let findObj = users.find(u => u.name == obj.name)


        if (findObj && findObj.password === obj.password) {


            return findObj
        }
        else {

            return null
        }



    } catch (e) {

        return e

    }

}



const addUser = async (obj) => {

    try {

        let newUser = new userModel({
            name: obj.name,
            password: obj.password

        })

        let usres = await getUsers()
        let findObj = usres.find(u => u.name === newUser.name)


        if (findObj) {
            return { msg: "already there is same username" }
        }
        else {
            return await userDal.addUser(newUser)

        }


    } catch (e) {

        return e

    }

}

const udateUser = async (id, obj) => {

    try {

        return await userDal.updateUser(id, { name: obj.name, passward: obj.passward })


    } catch (e) {

        return e

    }

}

const deleteUser = async (id) => {

    try {

        return await userDal.deleteUser(id)


    } catch (e) {

        return e

    }

}

module.exports = { getUsers, getUser, addUser, udateUser, deleteUser, auth }
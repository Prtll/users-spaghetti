const User = require('../models/users.models')


const findAllUsers = async() => {

    const data = await User.findAll()
    return data 
}

const findUserById = async (id) => {
    const userById = await User.findOne({
        where: {
            id: id
        },
    })
    return userById    
}

const createUser = async (obj) => {
    const newUser = await User.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    })
    return newUser   
}

const updateUser = async (id, obj) => {
    const data = await User.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]     
}

const deleteUser = async (id) => {
    const data = await User.destroy({
        where: {
            id: id
        }
    })
    return data   
}


module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}
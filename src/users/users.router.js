const router = require('express').Router()

const userSevices = require('./users.services')

router.get('/users', userSevices.getAllUsers)
router.post('/users', userSevices.postUser)

router.get('/users/:id', userSevices.getUserById)
router.patch('/users/:id', userSevices.patchUser)
router.delete('/users/:id', userSevices.deleteUser)

module.exports = router 
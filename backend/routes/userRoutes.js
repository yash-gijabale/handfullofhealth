const express = require('express')
const { createUser, login, logout, changePassword } = require('../controller/userController')
const isAuthenticate = require('../middleware/isAuthenticate')

const router = express.Router()

router.route('/newUser').post(createUser)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/changePassword/:id').post( isAuthenticate ,changePassword)

module.exports = router
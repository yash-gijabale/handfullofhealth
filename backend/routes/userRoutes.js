const express = require('express')
const { createUser, login, logout, changePassword, addProductToWishList, removeFromWishlist, userDetails } = require('../controller/userController')
const isAuthenticate = require('../middleware/isAuthenticate')

const router = express.Router()

router.route('/newUser').post(createUser)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/changePassword/:id').post(isAuthenticate, changePassword)
router.route('/me').get(isAuthenticate, userDetails)


router.route('/addToWishlist/:id').post(isAuthenticate, addProductToWishList)
router.route('/removeFromWishlist/:id').get(isAuthenticate, removeFromWishlist)

module.exports = router
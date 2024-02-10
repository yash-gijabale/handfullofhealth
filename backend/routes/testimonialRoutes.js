const express = require('express')
const { newTestimonial, getAllTestimonials } = require('../controller/testimonialController')
const isAuthenticate = require('../middleware/isAuthenticate')

const router = express.Router()

router.route('/newTestimonial').post(isAuthenticate, newTestimonial)
router.route('/allTestimonials').get(getAllTestimonials)

module.exports = router
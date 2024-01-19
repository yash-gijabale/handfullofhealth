const express = require('express')
const { createFaq } = require('../controller/faqController')

const router = express.Router()

router.route('/newFaq').post(createFaq)

module.exports = router
const express = require('express')
const { createFaq, getAllFaqs } = require('../controller/faqController')

const router = express.Router()

router.route('/newFaq').post(createFaq)
router.route('/faqs').get(getAllFaqs)

module.exports = router
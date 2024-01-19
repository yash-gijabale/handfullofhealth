const mongoose = require('mongoose')

const faqModel = new mongoose.Schema({
    faqTitle:{
        type: String,
        required: [true, 'FAQ title is required']
    },

    faqAnswer :{
        type: String,
        required: [true, 'Answer is required']
    }
})


module.exports = mongoose.model('faqs', faqModel)
const mongoose = require('mongoose')


const TestimonialSchema = new mongoose.Schema({
    testimonial:{
        type: String,
        required: true
    },

    userId:{
        type: mongoose.Schema.ObjectId,
        required: true
    },

    user:{
        type: String,
        required: true
    },
    userAvatar:{
        type: String,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('testimonials', TestimonialSchema)
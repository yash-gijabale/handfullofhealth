const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Please specified product name']
    },

    discription: {
        type: String,
        required: [true, 'Please specified product discription']
    },

    price: {
        type: Number,
        required: [true, 'Please specified product price']
    },

    rating: {
        type: Number,
        default: 0
    },

    reviews:[
        {
            user:{
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name:{
                type: String,
                required: true
            },
            rating:{
                type:Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            },
            createdAt:{
                type: Date,
                default: Date.now
            }

        }
    ],

    category: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Please Specified product category']
    },

    collection: {
        type: mongoose.Schema.ObjectId,
        required: false
    },

    images: [
        {
            public_id:{
                type: String,
                required: true 
            },

            secure_url:{
                type: String,
                required: true
            }
        }
    ],

    cupons: [
        {
            cuponId:{
                type: String,
                required: false
            },

        }
    ],

    discount: {
        type: Number,
        default: 0
    },

    numberOfReview: {
        type: Number,
        default: 0
    },

    createdBy: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('Product', productSchema)
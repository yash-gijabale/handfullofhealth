const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'Please provide first name']
    },

    lastName:{
        type: String,
        required: [true, 'Please provide last name']
    },

    email:{
        type: String,
        required: [true, 'Please provide Email Id']
    },

    country: {
        type: String,
        required: [true, 'Please provide country name']
    },

    address: {
        type: String,
        required: [true, 'Please provide address']
    },

    city: {
        type: String,
        required: [true, 'Please provide city']
    },

    state:{
        type: String,
        required: [true, 'Please provide state']
    },

    pincode: {
        type: Number,
        required: [true, 'Please provide pincode']
    },

    mobileNumber:{
        type: Number,
        required: [true, 'Please provide mobile number ']
    },

    orderItems:[
        {
            productId: {
                type: mongoose.Schema.ObjectId,
                required: true
            },

            productQty:{
                type: Number,
                required: true
            }
            
        }
    ],

    itemAmount: {
        type: Number,
        default: 0
    },

    shippingCharge: {
        type: Number,
        default: 0
    },
    
    totalAmount: {
        type: Number,
        default: 0
    },

    user:{
        type: mongoose.Schema.ObjectId,
        required: true

    },

    status:{
        type: String,
        default: 'proccessing'
    },

    cancleBy:{
        type: Number,
        default: 0
        //0-> defalut none
        //1-> by admin
        //2-> by user
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})


module.exports = mongoose.model('orders', orderSchema)
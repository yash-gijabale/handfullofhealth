const mongoose = require('mongoose')
// const validator = require('valida')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required']
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'Password must be more than 4 charactors'],
        select: false
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'please enter valid email'],
        // validate: [validator.isEmail, 'plase check your enterd email'],
        // required: [true, 'Emial is required']
    },

    avatar: {

        public_id: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    },

    role: {
        type: String,
        required: true,
        default: 'user'
    },

    wishList: [
        {
            product:{
                type: mongoose.Schema.ObjectId,
                required: true
            },
            name:{
                type: String,
                required: true
            },

            image:{
                type: String,
                required: true
            },
            price:{
                type: String,
                required: true
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }

})

userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)

})

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRERE_KEY, {
        expiresIn: process.env.EXPIRES_IN
    })
}


userSchema.methods.checkPassword = function(password){
    console.log(password)
    // console.log(this._id)
    return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
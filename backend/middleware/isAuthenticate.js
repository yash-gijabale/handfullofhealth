
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const ErrorHandler = require('../utils/ErrorHandler')



const isAuthenticate = async (req, res, next) => {
    const { token } = req.cookies
    if(!token){
        return next(new ErrorHandler('Login to access this rosurce', 400))
    }
    const { id } = jwt.verify(token, process.env.JWT_SECRERE_KEY)

    const user = await User.findById({_id: id})
    // console.log(user)
    if(!user){
        return next(new ErrorHandler('Invalid use', 401))
    }

    req.user = user
    next()
}

module.exports = isAuthenticate
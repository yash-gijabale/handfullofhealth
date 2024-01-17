const ErrorHandler = require("../utils/ErrorHandler")

const checkRole = (...roles) => {
    return (req, res, next) => {
        const user = req.user

        if (!roles.includes(user.role)) {
            return next(new ErrorHandler('You dont have access this resource'))
        }

        next()
    }
}

module.exports = checkRole
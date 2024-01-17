const ErrorHandler = require('../utils/ErrorHandler')

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal server error'


    //handeling MongoDB error
    console.log(err.message)
    if(err.name === 'Cast')
    {
        const message = `Ersourse not found. Invalid: ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success:false,
        error:`${err.message}`
    })
}
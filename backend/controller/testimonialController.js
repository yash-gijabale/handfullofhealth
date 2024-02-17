const Testimonial = require('../models/testimonialModel')

const catchAsyncError = require('../middleware/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')


exports.newTestimonial = catchAsyncError(async (req, res, next) => {


    let testimonialData = {
        testimonial: req.body.testimonial,
        userId: req.user._id,
        user: req.user.name,
        userAvatar: req.user.avatar.url
    }

    console.log(testimonialData)

    const testimonial = await Testimonial.create(testimonialData)
    if (!testimonial) {
        return next(new ErrorHandler('Something is wrong!', 400))
    }

    res.json({
        success: true,
        result: testimonial
    })

})


exports.getAllTestimonials = catchAsyncError(async (req, res, next) => {
    const testimonials = await Testimonial.find({})
    res.json({
        success: true,
        result: testimonials
    })
})


 
// export function hello(){}
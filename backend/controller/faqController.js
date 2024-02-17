const Faq = require('../models/faqModel')
const catchAsyncError = require('../middleware/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')



exports.createFaq = catchAsyncError(async (req, res, next) => {

    const faq =  await Faq.create(req.body)

    if(!faq){
        return next(new ErrorHandler('Something is wrong', 400))
    }

    res.status(200).json({
        success: true,
        message: 'FAQ is created',
        result: faq
    })
})


exports.getAllFaqs = catchAsyncError(async (req, res, next) =>{

    const faqs = await Faq.find({});

    res.json({
        success: true,
        result: faqs
    })

})
const catchAsyncError = require('../middleware/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const User = require('../models/userModel')
const sentJwtToken = require('../utils/sendJwtToken')
const Product = require('../models/ProductModel')

exports.createUser = catchAsyncError(async (req, res, next) => {
    console.log(req.body)

    const { name, email, password, role, avatar } = req.body

    const userData = {
        name,
        email,
        password,
        role,
    }

    const user = await User.create(userData)
    if (!user) {
        return next(new ErrorHandler('Something is wrong', 400))
    }

    await sentJwtToken(user, res)
})


exports.login = catchAsyncError(async (req, res, next) => {
    console.log(req.body)
    const { email, password } = req.body
    if (!email || !password) {
        return next(new ErrorHandler('Please Specified Email and Password!', 400))
    }

    const user = await User.findOne({ email }).select('+password')
    if (!user) {
        return next(new ErrorHandler('Invalid email or password!', 400))
    }
    const isMatched = await user.checkPassword(password)

    if (!isMatched) {
        return next(new ErrorHandler('Invalid email or password!', 400))
    }

    await sentJwtToken(user, res)
})


exports.logout = catchAsyncError(async (req, res, next) => {

    const { token } = req.cookies
    if (!token) {
        return next(new ErrorHandler('You already logout', 400))
    }

    res.clearCookie('token')
    res.status(200).json({
        success: true,
        result: 'Logout successfully'
    })
})

exports.userDetails = catchAsyncError(async (req, res, next) => {
    const userId = req.user._id
    const profile = await User.findById({ _id: userId })
    if (!profile) {
        return next(new ErrorHandler('User not found !', 404))
    }
    res.status(200).json({
        success: true,
        result: profile
    })
})

exports.deleteUser = catchAsyncError(async (req, res, next) => {

    const userId = req.params.userId

    const user = await User.findById({ _id: userId })

    if (!user) {
        return next(new ErrorHandler('User not found !', 404))
    }

    await User.deleteOne({ _id: userId })

    res.status(200).json({
        success: true,
        result: 'User Deleted successfully'
    })

})

exports.changePassword = catchAsyncError(async (req, res, next) => {

    let { newPassword, oldPassword } = req.body

    let userId = req.params.id;

    let user = await User.findById({ _id: userId }).select('+password')

    if (!user) {
        return next(new ErrorHandler('User not Found!', 404))
    }

    let isMatched = await user.checkPassword(oldPassword)
    if (!isMatched) {
        return next(new ErrorHandler('Password does not match !'), 401)
    }
    console.log('matched')


    user.password = newPassword
    await user.save();

    res.status(200).json({
        success: true,
        result: 'Password updated suuccessfully !'
    })
})

exports.addProductToWishList = catchAsyncError(async (req, res, next) => {

    const productId = req.params.id
    let user = req.user

    const product = await Product.findById({ _id: productId })

    let whishListItem = {
        product: product._id,
        name: product.name,
        image: product.images[0].secure_url ? product.images[0].secure_url : '',
        price: product.price
    }

    user.wishList.push(whishListItem)

    await user.save()

    res.status(200).json({
        success: true,
        message: 'Product Added to your wishlist',
        result: user.wishList
    })

})


exports.removeFromWishlist = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id;

    let wishList = req.user.wishList

    wishList = wishList.filter(item => {
        return item.product != productId
    })

    user = req.user
    user.wishList = wishList
    await user.save()
    res.status(200).json({
        success: true,
        message: 'Wishlist updated',
        result: user.wishList
    })
})
const Order = require('../models/orderModel')
const catchAsyncError = require('../middleware/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const Product = require('../models/ProductModel')
const userModel = require('../models/userModel')


exports.createOrder = catchAsyncError(async (req, res, next) => {
    // console.log(req.body)
    let orderForm = { ...req.body }
    orderForm.user = '65a2a96d05e65044449c00bf'
    const order = await Order.create(orderForm)
    res.status(200).json({
        success: true,
        result: order
    })
})



exports.getMyAllOrders = catchAsyncError(async (req, res, next) => {

    const userId = req.user._id

    const orders = await Order.find({ user: userId })

    const products = []

    for (const order of orders) {

        const user = await userModel.findById({ _id: order.user }, { name: 1 })
        const temp = []
        for (const product of order.orderItems) {
            const productData = await Product.findById({ _id: product.productId })
            temp.push(productData)
        }

        const product = { ...order._doc }
        product.orderItems = temp
        product.user = user
        products.push(product)
    }
    res.status(200).json({
        success: true,
        result: products
    })

})


exports.getAllOrders = catchAsyncError(async (req, res, next) => {

    const orders = await Order.find({})
    const products = []

    for (const order of orders) {

        console.log(order.user)
        const user = await userModel.findById({ _id: order.user }, { name: 1 })
        const temp = []
        for (const product of order.orderItems) {
            const productData = await Product.findById({ _id: product.productId })
            temp.push(productData)
        }

        const product = { ...order._doc }
        product.orderItems = temp
        product.user = user
        products.push(product)
    }
    res.status(200).json({
        success: true,
        result: products
    })
})

exports.updateOrderStatus = catchAsyncError(async (req, res, next) => {
    const orderId = req.params.id
    const order = await Order.findById({ _id: orderId })

    if (!order) return next(new ErrorHandler('Order not found !'))


    if (order.status === 'proccessing') {
        if (order.status === 'delivered') return next(new ErrorHandler('You already delivered this order'))
    } else {
        if (order.status === 'cancled') return next(new ErrorHandler('You already cancled this order'))
    }


    order.status = req.body.status

    await order.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
        result: order
    })
})



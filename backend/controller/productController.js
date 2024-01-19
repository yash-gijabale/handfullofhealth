const Product = require('../models/ProductModel')
const Category = require('../models/categoryModel')
const ProductCollection = require('../models/collectionModel')

const catchAsyncError = require('../middleware/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const ApiFeature = require('../utils/ApiFeatures')


exports.createProduct = catchAsyncError(async (req, res, next) => {

    const body = req.body
    const product = await Product.create(body)

    if (!product) {
        return next(new ErrorHandler('Something is Wrong', 404))
    }

    res.status(200).json({
        success: true,
        result: product
    })

}
)

exports.getAllProducts = catchAsyncError(async (req, res, next) => {

    // console.log(req.query)
    const resultPerPage = 2

    const apiResponce = new ApiFeature(Product.find(), req.query).search().filter().pagination(resultPerPage)

    const products = await apiResponce.query

    if (!products) {
        return next(new ErrorHandler('Not Found', 404))
    }

    res.status(200).json({
        success: true,
        result: products
    })

})


exports.productDetails = catchAsyncError(async (req, res, next) => {
    const productId = req.params.id

    const product = await Product.find({ _id: productId })
    if (!product) {
        return next(new ErrorHandler('Product not found!', 404))
    }

    res.status(200).json({
        success: true,
        result: product
    })
})

exports.addReview = catchAsyncError(async (req, res, next) => {

    console.log('user res-->', req.body)
    const product = await Product.findById({ _id: req.body.productId })

    console.log(req.user.id)
    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    let newReview = {
        user: req.user.id,
        name: req.user.name,
        rating: req.body.rating,
        comment: req.body.comment
    }

    let reviews = product.reviews

    let isExist = reviews.find(review => {
        return req.user.id.toString() === review.user.toString() ? true : false
    })


    if (isExist) {
        reviews = reviews.filter(reviews => {
            return req.user.id.toString() != reviews.user.toString() ? reviews : ''
        })

        reviews.push(newReview)
    } else {

        reviews.push(newReview)
    }

    let rating = 0;

    reviews.forEach(review => {
        rating += Number(review.rating)
    })

    console.log(rating)
    product.reviews = reviews
    product.rating = (rating / reviews.length).toFixed(1)
    product.numberOfReview = reviews.length

    await product.save()

    res.status(200).json({
        success: true,
        result: 'Review Added'
    })
})



exports.deleteProduct = catchAsyncError(async (req, res, next) => {

    const productId = req.params.id

    const product = await Product.findById({ _id: productId })

    if (!product) {
        return next(new ErrorHandler('Product Not Found', 404))
    }

    await Product.deleteOne({ _id: productId })

    res.status(200).json({
        success: true,
        result: 'Product deleted successfully'
    })
})


//---------------------------CATEGORY-----------------------------------
//ADD CATEGORY
exports.newCategory = catchAsyncError(async (req, res, next) => {

    let category = req.body
    console.log(category)

    const newCategory = await Category.create(category)
    if (!newCategory) {
        return next(new ErrorHandler('Something is wrong', 400))
    }

    res.status(200).json({
        success: true,
        message: 'Category crerated suceessfully',
        result: newCategory
    })
})

exports.getAllCategory = catchAsyncError(async (req, res, next) => {

    const categories = await Category.find()

    res.status(200).json({
        success: true,
        message: 'All categories',
        result: categories ? categories : []
    })
})

exports.deleteCategory = catchAsyncError(async (req, res, next) => {

    const catId = req.params.id;

    const category = await Category.findById({ _id: catId })
    if (!category) {
        return next(new ErrorHandler('Category not found', 404))
    }

    await Category.deleteOne({ _id: catId })

    res.status(200).json({
        success: true,
        message: 'Category deleted successfully',
        result: []

    })
})

exports.editCategory = catchAsyncError(async (req, res, next) => {
    const { categoryName, discription } = req.body
    const catId = req.params.id

    const category = await Category.findById({ _id: catId })
    if (!category) {
        return next(new ErrorHandler('Category not found', 404))
    }

    category.categoryName = categoryName,
        category.discription = discription

    await category.save()

    res.status(200).json({
        success: true,
        message: 'Category updated suuccessfully',
        result: category
    })
})

exports.categoryWiseProduct = catchAsyncError(async (req, res, next) => {

    const id = req.body.id

    const products = await Product.find({ category: id })

    res.status(200).json({
        success: true,
        message: 'Products found',
        result: products
    })
})


exports.categoriesWithProduct = catchAsyncError(async (req, res, next) => {

    const products = await Category.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: '_id',
                foreignField: 'category',
                as: 'products'
            }
        }
    ])

    res.status(200).json({
        success: true,
        message: 'Category found',
        result: products
    })

})

// PRODUCT COLLECTION 

exports.createCollectionProducts = catchAsyncError(async (req, res, next) => {

    const { collectionName, title, thumbnail } = req.body

    const productsId = req.body.products

    let collection = {
        collectionName,
        title,
        thumbnail,
        products: productsId
    }

    const newCollection = await ProductCollection.create(collection)

    if (!newCollection) {
        return next(new ErrorHandler('Something is wrong', 400))
    }

    res.status(200).json({
        success: true,
        message: 'New collection is created!',
        result: newCollection
    })
})


exports.getAllCollections = catchAsyncError(async (req, res, next) => {

    const collections = await ProductCollection.find()

    if (!collections) {
        return next(new ErrorHandler('Something is wrong', 400))
    }
    res.status(200).json({
        result: collections
    })
})


exports.getCollection = catchAsyncError(async (req, res, next) => {

    const id = req.params.id

    const collection = await ProductCollection.findById({ _id: id })
    if (!collection) {
        return next(new ErrorHandler('Collection not found', 404))
    }

    res.status(200).json({
        success: true,
        message: 'Collectionn found',
        result: collection
    })

})

exports.deleteCollection = catchAsyncError(async (req, res, next) => {
    const id = req.params.id
    const collection = await ProductCollection.findById({ _id: id })
    if (!collection) {
        return next(new ErrorHandler('Collection not found', 404))
    }

    await ProductCollection.deleteOne({ _id: id })

    res.status(200).json({
        success: true,
        message: 'Collectionn Deleted',
        result: []
    })
})

exports.productWithCollection = catchAsyncError(async (req, res, next) => {

    const collections = await ProductCollection.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: '_id',
                foreignField: 'collection',
                as: 'products'
            }
        }
    ])

    res.status(200).json({
        success: true,
        result: collections
    })
})


exports.collectionWiseProduct = catchAsyncError(async (req, res, next) => {

    const collectionId = req.params.id

    const collection = await ProductCollection.findById({ _id: collectionId })
    const products = await Product.find({ collection: collectionId })

    res.status(200).json({
        success: true,
        result: {
            collection,
            products
        }
    })
})
const express = require('express')
const {
    createProduct,
    getAllProducts,
    productDetails,
    addReview,
    deleteProduct,
    newCategory, 
    getAllCategory,
    deleteCategory,
    editCategory} = require('../controller/productController');
const isAuthenticate = require('../middleware/isAuthenticate');
const checkRole = require('../middleware/checkRole');

const router = express.Router();


router.route('/newProduct').post(createProduct)
router.route('/products').get(getAllProducts)
router.route('/product/:id').get(productDetails).delete(isAuthenticate, deleteProduct)
router.route('/addReview').post(isAuthenticate, addReview)
// router.route('/deteleProduct/:id').delete(isAuthenticate, deleteProduct)

//CATEGORY ROUTES
router.route('/newCategory').post(isAuthenticate, checkRole('admin') ,newCategory)
router.route('/categories').get(getAllCategory)
router.route('/deleteCategory/:id').delete(isAuthenticate, checkRole('admin'), deleteCategory)
router.route('/editCategory/:id').put(isAuthenticate, checkRole('admin'), editCategory)

module.exports = router
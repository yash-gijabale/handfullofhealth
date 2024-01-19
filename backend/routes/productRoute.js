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
    editCategory,
    createCollectionProducts,
    getAllCollections,
    getCollection,
    deleteCollection,
    categoryWiseProduct,
    productWithCollection,
    collectionWiseProduct} = require('../controller/productController');
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

//COLLECTION ROUTES
router.route('/newCollection').post(isAuthenticate, checkRole('admin'), createCollectionProducts)
router.route('/allCollection').get(getAllCollections)
router.route('/collection/:id').get(getCollection).delete(isAuthenticate, checkRole('admin'), deleteCollection)
router.route('/productWithCollections').get(productWithCollection)
router.route('/collectionWiseProduct/:id').get(collectionWiseProduct)


router.route('/testcat').post(categoryWiseProduct)



module.exports = router
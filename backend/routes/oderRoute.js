const express = require('express')
const { createOrder, getMyAllOrders, getAllOrders, updateOrderStatus } = require('../controller/orderController')
const isAuthenticate = require('../middleware/isAuthenticate');
const checkRole = require('../middleware/checkRole');

const router = express.Router()

router.route('/createOrder').post(createOrder);
router.route('/myOrders').get(isAuthenticate, getMyAllOrders);
router.route('/admin/allOrders').get(isAuthenticate, checkRole('admin') , getAllOrders);
router.route('/admin/updateStatus/:id').put(isAuthenticate, checkRole('admin') , updateOrderStatus);


module.exports = router
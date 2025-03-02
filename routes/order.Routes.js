const { placeOrder } = require('../controllers/order.controller');

const router = require('express').Router();

//checkout or place order
router.post('/', placeOrder)

module.exports = router
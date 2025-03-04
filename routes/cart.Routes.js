const { addToCart, deleteCart } = require('../controllers/cart.controller');
const router = require('express').Router();

//POST: Add Cart
router.post('/', addToCart)

//DELETE: Delete Cart
router.delete('/:id', deleteCart)

//GET: get carts
router.get('/')

module.exports = router
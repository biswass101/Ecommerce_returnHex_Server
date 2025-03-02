const { getAllProducts, getProduct, addProduct, addMultipleProducts } = require('../controllers/product.controller');

const router = require('express').Router();

//GET: All Products
router.get('/', getAllProducts);

//GET: Single Prducts
router.get('/:id', getProduct)


/*extra api's not in requirement's but necessary for admin pannel or debugging*/

//POST: Add Product - single Product
router.post('/add-one', addProduct)

//POST: Add Products - multiple Product
router.post('/add-many', addMultipleProducts)
module.exports = router
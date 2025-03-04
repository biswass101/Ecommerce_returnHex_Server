const express = require('express')
const cors = require('cors')
const createHttpError = require('http-errors');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const app = express()

//Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

//Root EndPoints
app.get('/', (req, res) => {
    res.send("Welcom to the server!")
})

//Other EndPoints
app.use('/api/products', require('./routes/product.Routes'))
app.use('/api/cart', require('./routes/cart.Routes'))
app.use('/api/checkout', require('./routes/order.Routes'))

//Global Error Handler
app.use(globalErrorHandler)
module.exports = app
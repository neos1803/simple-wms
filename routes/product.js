const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router
  .get('/home', ProductController.home)
  .get('/', ProductController.getProducts)

module.exports = router
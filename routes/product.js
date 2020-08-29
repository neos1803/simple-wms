const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router
  .get('/home', ProductController.home)
  .get('/:id', ProductController.getProduct)

module.exports = router
const express = require('express')
const router = express.Router()

const ProductInController = require('../controllers/ProductInController')

router
  .get('/home', ProductInController.home)
  .get('/:id', ProductInController.getProductIn)

module.exports = router
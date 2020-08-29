const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router
  .get('/home', UserController.home)
  .get('/:id', UserController.getUser)

module.exports = router
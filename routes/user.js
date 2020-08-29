const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router
  .get('/home', UserController.home)
  .get('/', UserController.getUsers)

module.exports = router
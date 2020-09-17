const router = require('express').Router()
const AuthController = require("../controllers/AuthController")
const UserController = require('../controllers/UserController')

router.post('/signup', UserController.saveUser)
router.post('/login', AuthController.login)
router.get('/test', () => {
    console.log("Test Ya")
})

module.exports = router

require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT | 3000
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const productInRoute = require('./routes/product_in')
const authRoute = require('./routes/auth')
const auth = require('./middleware/AuthMiddleware')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/auth', authRoute)

app.listen(port, () => console.log('Listened on port ' + port))

require('dotenv').config()

const express = require('express')

// untuk upload ke cloudinary
const fileUpload = require('express-fileupload')

const app = express()
const port = process.env.PORT | 3000

const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const productInRoute = require('./routes/product_in')
const authRoute = require('./routes/auth')
const auth = require('./middleware/AuthMiddleware')

// untuk cloudinary
app.use(fileUpload({
  useTempFiles: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', auth, userRoute)
app.use('/api/v1/product', auth, productRoute)
app.use('/api/v1/in', auth, productInRoute)
app.use('/api/v1/auth', authRoute)

app.listen(port, () => console.log('Listened on port ' + port))
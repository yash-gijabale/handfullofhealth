const express = require('express')
const bodyParser = require('body-parser')
const errorMiddleWare = require('./middleware/error')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())

//hello hello skdjb
const product = require('./routes/productRoute')
const user = require('./routes/userRoutes')

app.use('/api/v1/', product)
app.use('/api/v1/', user)



app.use(errorMiddleWare)



module.exports = app
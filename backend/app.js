const express = require('express')
const bodyParser = require('body-parser')
const errorMiddleWare = require('./middleware/error')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())

//hello hello skdjb
const product = require('./routes/productRoute')
const user = require('./routes/userRoutes')
const faq = require('./routes/faqRoute')
const testimonial = require('./routes/testimonialRoutes')
const orders = require('./routes/oderRoute')

app.use('/api/v1/', product)
app.use('/api/v1/', user)
app.use('/api/v1/', faq)
app.use('/api/v1/', testimonial)
app.use('/api/v1/', orders)



app.use(errorMiddleWare)



module.exports = app
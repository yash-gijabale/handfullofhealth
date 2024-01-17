const app = require('./app')
const dotenv = require('dotenv')
const connectDb = require('./config/db')


dotenv.config({ path: 'backend/config/config.env' })

connectDb()

const server = app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})
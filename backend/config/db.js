const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/handFullOfHealth'

const connect = () =>{
    mongoose.connect(url)
    .then((data)=>{
        console.log(data.connection.host)
        console.log(mongoose.connection.readyState)
    })

}

module.exports = connect
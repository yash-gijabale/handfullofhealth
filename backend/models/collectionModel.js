const mongoose = require('mongoose')


const productCollection = new mongoose.Schema({

    collectionName: {
        type: String,
        required: [true, 'Collection name is required']
    },

    title: {
        type: String,
        required: [true, 'Title is required']
    },

    thumbnail: {

        type: String,
        required: true
    },

})


module.exports = mongoose.model('ProductCollection', productCollection)
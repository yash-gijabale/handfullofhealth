const mongoose =  require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName:{
        type: String,
        required: [true, 'Category name is required'],
        unique: true
    },

    image:{
        public_url:{
            type: String,
            required: true
        },

        secure_url:{
            type: String,
            required: true
        }
    },

    discription:{
        type: String,
        required: [true, 'Category Discription is required']
    }
})


module.exports = mongoose.model('Category',categorySchema)
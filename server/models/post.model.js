const {Schema, model} = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  imageUrl: String,
  comments: {
    type: Schema.Types.ObjectId,
    ref: 'comments'
  }
})

module.exports = model('post', postSchema)

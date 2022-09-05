const {Schema, model} = require('mongoose')

const commentSchema = new Schema({
  name: {
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
  postId: {
    ref: 'posts',
    type: Schema.Types.ObjectId
  }
})


module.exports = model('comments', commentSchema)

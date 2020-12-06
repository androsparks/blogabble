const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema ({
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Writer"
    },
    subtitle: String,
    title: String,
    date: Date,
    body: String,
    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ]
}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema)
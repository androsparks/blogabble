const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    comment: String,
    date: Date,
  });

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = mongoose.model('Comment', CommentSchema)
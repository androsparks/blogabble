const mongoose = require('mongoose'), 
  dateFormat = require("dateformat")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    comment: String,
    date: Date,
    post_id: mongoose.Schema.Types.ObjectId,
    owner: String
  }, { timestamps: true });

  CommentSchema.methods.toJSON = function () {
    const comment = this;
    const commentObject = comment.toObject();
    if (commentObject.updatedAt) {
      commentObject.updatedAt = dateFormat(commentObject.updatedAt, "mmm d, yyyy");
    }
    return commentObject;
  };
module.exports = mongoose.model('Comment', CommentSchema)
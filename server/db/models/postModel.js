const mongoose = require('mongoose'),
  dateFormat = require("dateformat")
const Schema = mongoose.Schema

const PostSchema = new Schema ({
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Writer"
    },
    subtitle: String,
    title: String,
    date: Date,
    body: String
    // comments: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: 'Comment',
    //     },
    //   ]
}, { timestamps: true })

PostSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post_id'
});

PostSchema.methods.toJSON = function () {
  const post = this;
  const postObject = post.toObject();
  if (postObject.updatedAt) {
    postObject.updatedAt = dateFormat(postObject.updatedAt, "mmm d, yyyy");
  }
  return postObject;
};

module.exports = mongoose.model('Post', PostSchema)
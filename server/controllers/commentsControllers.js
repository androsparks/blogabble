const Comment = require('../db/models/commentModel'), Post = require('../db/models/postModel'), mongoose = require('mongoose')

//***********************************************
// COMMENT CRD FUNCTIONS BELOW 
//***********************************************

exports.createComment = async (req, res) => {
    let newOb = mongoose.Types.ObjectId(req.params.id)
    Comment.create(req.body, async(err, comment) => {
        if(err) {
            res.status(400).json(err)
        } else {
            comment.post_id = newOb
            comment.save()
            res.status(201).json(comment)
        }
    }
  )
}

exports.getAllComments = async (req, res) => {
    let newOB = mongoose.Types.ObjectId(req.params.id)
    const post = await Post.findById(newOB)
    try {
        await post.populate({
            path: 'comments'
          })
          .execPopulate();
        res.status(200).json(post.comments);
      } catch (error) {
          console.log(error)
        res.status(400).json({ error: error.message });
      }
}
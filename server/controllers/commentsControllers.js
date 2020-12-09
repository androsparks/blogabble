const Comment = require('../db/models/commentModel'), Post = require('../db/models/postModel'), mongoose = require('mongoose')

//***********************************************
// COMMENT CRD FUNCTIONS BELOW 
//***********************************************

exports.createComment = async (req, res) => {
    let newOb = mongoose.Types.ObjectId(req.params.id)
    console.log(req.body)
    Comment.create(req.body, async(err, comment) => {
        if(err) {
            res.status(400).json(err)
        } else {
            comment.post_id = newOb
            comment.save()
            console.log(comment)
            res.status(201).json(comment)
        }
    }
  )
}

exports.getAllComments = async (req, res) => {
    //find post and then populate comments? 
    //or do avritual and pull all comments with post id? 
    // console.log(typeof req.params.id)
    console.log(req.params.id)
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
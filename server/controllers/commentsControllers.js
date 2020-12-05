const Comment = require('../db/models/commentModel')

//***********************************************
// COMMENT CRD FUNCTIONS BELOW 
//***********************************************

exports.createComment = async (req, res) => {
    Comment.create(req.body, async(err, comment) => {
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(201).json(comment)
        }
    }
  )
}

exports.getAllComments = async () => {
    //find post and then populate comments? 
    //or do avritual and pull all comments with post id? 
}
const Post = require('../db/models/postModel')

exports.createPost = (req, res) => {
    Post.create(req.body, (error, post) => {
        if(error) {
            console.log(`Error creating Post, ${new Date()}: ${error}`)
            res.status(400).json(error)
        } else {
            console.log(req.body)
            console.log(post)
            res.status(201).json(post)
        }
    }
  )
}

exports.getAllPosts = (req, res) => {
    Post.find().then(all => res.json(all))
}

exports.getSinglePost = (req, res) => {
    Post.findById(req.params.postId, (err, post) => {
        if(err){
            console.log(err)
            res.status(400).json(err)
        } else {
            if(!post) {
                res.sendStatus(410)
            }
            else {
                res.status(200).json(post)
            }
        }
    }
  )
}

exports.updatePost = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'body'];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).json({ message: 'Invalid updates' })
    };
    const post = await Post.findById(req.params.id)
    try {
        updates.forEach((update) => (post[update] = req.body[update]));
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.json("Your post have been deleted")
}
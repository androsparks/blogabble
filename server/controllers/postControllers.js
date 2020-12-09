const Post = require('../db/models/postModel'),
Writer = require('../db/models/writerModel'),
mongoose = require('mongoose')

exports.createPost = (req, res) => {
    Post.create(req.body, (error, post) => {
        if(error) {
            console.log(`Error creating Post, ${new Date()}: ${error}`)
            res.status(400).json(error)
        } else {
            post.owner = req.user._id
            post.save()
            res.status(201).json(post)
        }
    }
  )
}

exports.getMyPosts =async (req, res) => {
    try {
        await req.user
          .populate({
            path: 'posts'
          })
          .execPopulate();
        res.status(200).json(req.user.posts);
      } catch (error) {
          console.log(error)
        res.status(400).json({ error: error.message });
      }
}

exports.getSinglePost = async (req, res) => {
    let newOb = mongoose.Types.ObjectId(req.params.id)
    try {
        let post = await Post.findById(newOb)
        console.log(post)
        let writerData = await Writer.findById(post.owner)
        const { firstName, lastName, avatar} = writerData
        const writer = {
            firstName,
            lastName,
            avatar
        }
        res.status(200).json({post, writer})
    } catch (error) {
        console.log(error)
    }
}

exports.updatePost = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'body, subtitle'];
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
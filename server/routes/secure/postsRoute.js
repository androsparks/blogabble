//create posts 
//delete posts 
//update posts
const router = require('express').Router(),
{ createPost, deletePost } = require('../../controllers/postControllers')

router.post('/api/posts', createPost)
router.delete('/api/posts/:id', deletePost)
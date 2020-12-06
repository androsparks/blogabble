const router = require('express').Router(),
{ createPost, deletePost, getAllPosts } = require('../../controllers/postControllers')

router.get('/api/posts', getAllPosts)
router.post('/api/posts', createPost)
router.delete('/posts/:id', deletePost)

module.exports = router;
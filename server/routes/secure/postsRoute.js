const router = require('express').Router(),
{ createPost, deletePost, getAllPosts, updatePost } = require('../../controllers/postControllers')

router.get('/api/posts', getAllPosts)
router.post('/api/posts', createPost)
router.put('/api/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)

module.exports = router;
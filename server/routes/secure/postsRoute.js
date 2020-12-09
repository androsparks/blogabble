const router = require('express').Router(),
{ createPost, deletePost, getMyPosts, getAllPosts, updatePost } = require('../../controllers/postControllers')

router.get('/api/posts', getMyPosts)
// router.get('/api/profile/posts/:id', getAllPosts)
router.post('/api/posts', createPost)
router.put('/api/posts/:id', updatePost)
router.delete('/api/posts/:id', deletePost)

module.exports = router;